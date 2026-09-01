// Teach-first lesson engine.
// Introduction cards are instructional steps, not questions. Exercises only become
// available after the learner has seen the relevant meaning, romanization, and example.
(function(){
  const getLesson=id=>LESSONS.find(l=>l.id===id);
  const getStep=()=>{const s=state.lessonState;const l=s&&getLesson(s.lessonId);return l&&l.steps[s.currentStepIndex]};
  const exerciseSteps=l=>l.steps.filter(s=>s.type!=='introduction');
  const stepIsAnswered=(s,index)=>Array.isArray(s?.answeredSteps)&&s.answeredSteps.includes(index);
  const currentExerciseNumber=(l,index)=>l.steps.slice(0,index+1).filter(s=>s.type!=='introduction').length;
  const totalExercises=l=>exerciseSteps(l).length;
  const saveState=()=>save();

  window.startLesson=function(id){
    const i=LESSONS.findIndex(l=>l.id===id);
    if(i<0||!unlocked(i))return;
    const l=LESSONS[i];
    state.lessonState={lessonId:l.id,currentLesson:i,currentStepIndex:0,answeredSteps:[],score:0,xpEarned:0,completed:false,lessonProgress:0,attempts:0,streak:state.streak,hearts:4,draft:null};
    saveState();
    location.hash='lesson';
    window.renderLesson();
  };

  window.resumeLesson=function(){
    const s=state.lessonState;
    if(!s)return;
    const l=getLesson(s.lessonId);
    if(!l){state.lessonState=null;saveState();location.hash='learn';return}
    // Migrate old question-only progress safely. Old progress cannot identify the new
    // instructional position, so resume that lesson from its first teaching card.
    if(!Number.isInteger(s.currentStepIndex)||!Array.isArray(s.answeredSteps)){
      s.currentStepIndex=0;s.answeredSteps=[];s.score=0;s.attempts=0;s.hearts=4;s.draft=null;s.completed=false;s.lessonProgress=0;
      saveState();
    }
    location.hash='lesson';
    window.renderLesson();
  };

  window.resumeCard=function(){
    const s=state.lessonState;if(!s||s.completed)return '';
    const l=getLesson(s.lessonId);if(!l)return '';
    const done=s.currentStepIndex||0;
    const total=l.steps.length;
    const pct=Math.round((done/total)*100);
    return '<div class="card resume"><div><p class="tag">Resume</p><h2>'+esc(l.title)+'</h2><p>Lesson progress · '+pct+'%</p></div><button onclick="resumeLesson()">Resume lesson</button></div>';
  };

  window.qHeader=function(l,s){
    const total=l.steps.length;
    const pct=Math.round((s.currentStepIndex/Math.max(1,total))*100);
    const exNo=currentExerciseNumber(l,s.currentStepIndex);
    const exTotal=totalExercises(l);
    const label=l.steps[s.currentStepIndex]?.type==='introduction'?'Learn this new word':'Practice '+exNo+' of '+exTotal;
    return '<div class="lesson-head"><button class="alt" onclick="location.hash=\'#learn\'">Exit</button><div style="flex:1"><p>'+label+'</p><div class="progress"><i style="width:'+pct+'%"></i></div></div><span class="hearts">'+('♥'.repeat(s.hearts)+'♡'.repeat(Math.max(0,4-s.hearts)))+'</span></div>';
  };

  function renderIntroduction(step,s,l){
    const v=VOCAB.find(x=>x.id===step.vocabularyId);
    const roman=step.romanization||v?.romanization||'';
    const taish=step.taishanese||v?.taishanese||'';
    const meaning=step.meaning||v?.english||'';
    const example=step.example||v?.exampleSentence||'';
    const exampleRoman=step.exampleRomanization||v?.exampleRomanization||'';
    const audio=step.audio||v?.audio||null;
    const audioHtml=audio
      ? '<button class="audio-play" onclick="playAudio(\''+esc(audio)+'\')">Play verified audio</button>'
      : '<div class="audio-state"><span>Verified Taishanese audio is not available for this word yet.</span></div>';
    const exampleHtml=example
      ? '<div class="teach-example"><p class="tag">Example</p><strong>'+esc(example)+'</strong>'+(exampleRoman?'<span>'+esc(exampleRoman)+'</span>':'')+'</div>'
      : '';
    return '<div class="teach-card question-in"><p class="tag">'+esc(step.title||'New word')+'</p><h2>'+esc(meaning)+'</h2><div class="teach-target">'+esc(taish)+'</div><div class="teach-romanization">'+esc(roman)+'</div>'+audioHtml+exampleHtml+'<p class="teach-note">'+esc(step.note||'Learn the meaning and pronunciation before practicing.')+'</p><p class="teach-scaffold">Chinese characters are an additional representation. You do not need to know them already.</p><button onclick="continueLesson()">Continue</button></div>';
  }

  window.renderLesson=function(){
    const s=state.lessonState;
    if(!s){location.hash='learn';return}
    const l=getLesson(s.lessonId);
    if(!l){state.lessonState=null;saveState();location.hash='learn';return}
    if(s.currentStepIndex>=l.steps.length){window.finishLesson();return}
    const step=l.steps[s.currentStepIndex];
    if(step.type==='introduction'){
      shell(l.title,window.qHeader(l,s)+'<div class="exercise"><p class="tag">'+esc(l.objective)+'</p>'+renderIntroduction(step,s,l)+'</div>');
      return;
    }
    const body=renderQuestion(step,s);
    const stageLabel={recognition:'Recognition',reverseRecognition:'Reverse recognition',reinforce:'Reinforce',context:'Context',guidedRecall:'Guided recall',recall:'Recall'}[step.stage]||'Practice';
    shell(l.title,window.qHeader(l,s)+'<div class="exercise question-in"><p class="tag">'+esc(stageLabel)+' · '+esc(l.objective)+'</p><h2>'+esc(step.prompt)+'</h2>'+body+'<div id="feedback"></div></div>');
  };

  function renderQuestion(q,s){
    if(q.type==='matching'){
      return '<div class="matching">'+q.pairs.map((p,i)=>'<label class="match-row"><b>'+esc(p[0])+'</b><select data-match="'+i+'"><option value="">Choose meaning</option>'+q.pairs.map(x=>'<option value="'+esc(x[1])+'">'+esc(x[1])+'</option>').join('')+'</select></label>').join('')+'</div><button onclick="submitQuestion()">Check</button>';
    }
    if(q.type==='wordOrder'){
      return '<div class="word-bank">'+q.tokens.map((t,i)=>'<button class="alt token" onclick="addToken('+i+')">'+esc(t)+'</button>').join('')+'</div><div id="orderDraft" class="order-draft">'+((s.draft||[]).map(esc).join(' · ')||'Select the words in order')+'</div><button class="alt" onclick="clearDraft()">Reset</button> <button onclick="submitQuestion()">Check</button>';
    }
    if(q.type==='fillBlank'){
      return '<div class="guided-hint"><b>Hint</b><span>'+esc(q.hint||'Use what you just learned.')+'</span></div><div class="fill"><input id="answerInput" class="search" autocomplete="off" placeholder="Type the answer"></div><button onclick="submitQuestion()">Check</button>';
    }
    if(q.type==='listening'){
      const v=VOCAB.find(x=>q.vocabularyIds?.includes(x.id));
      return '<div class="audio-state">'+(v?.audio?'<button onclick="playAudio(\''+esc(v.audio)+'\')">Play audio</button>':'<span>Verified audio is not available for this item yet.</span>')+'</div>'+optionButtons(q);
    }
    return optionButtons(q);
  }

  function optionButtons(q){
    return '<div class="options">'+q.options.map((o,i)=>'<button class="option" onclick="chooseOption('+i+')">'+esc(o)+'</button>').join('')+'</div>';
  }

  window.currentQuestion=function(){return getStep()};

  window.chooseOption=function(i){
    const q=getStep();const s=state.lessonState;
    if(!q||q.type==='introduction'||!s||stepIsAnswered(s,s.currentStepIndex)||!q.options)return;
    document.querySelectorAll('.option').forEach((b,j)=>{b.disabled=true;if(j===i)b.classList.add('selected')});
    window.submitQuestion(q.options[i]);
  };

  window.addToken=function(i){
    const s=state.lessonState,q=getStep();
    if(!s||!q||q.type!=='wordOrder'||stepIsAnswered(s,s.currentStepIndex))return;
    s.draft=s.draft||[];
    const token=q.tokens[i];
    if(s.draft.includes(token))return;
    s.draft.push(token);saveState();
    const d=$('#orderDraft');if(d)d.textContent=s.draft.join(' · ');
  };

  window.clearDraft=function(){
    if(state.lessonState){state.lessonState.draft=[];saveState();const d=$('#orderDraft');if(d)d.textContent='Select the words in order'}
  };

  window.submitQuestion=function(optionAnswer){
    const s=state.lessonState,q=getStep();
    if(!s||!q||q.type==='introduction'||stepIsAnswered(s,s.currentStepIndex))return;
    let answer=optionAnswer;
    if(q.type==='fillBlank')answer=($('#answerInput')?.value||'').trim();
    if(q.type==='matching'){answer={};document.querySelectorAll('[data-match]').forEach(el=>answer[el.dataset.match]=el.value)}
    if(q.type==='wordOrder')answer=s.draft||[];
    let ok=false;
    if(q.type==='matching')ok=q.pairs.every((p,i)=>answer[i]===p[1]);
    else if(q.type==='wordOrder')ok=JSON.stringify(answer)===JSON.stringify(q.correctOrder);
    else ok=String(answer??'').trim().toLowerCase()===String(q.correctAnswer??'').trim().toLowerCase();
    s.answeredSteps.push(s.currentStepIndex);s.attempts++;
    if(ok)s.score++;else{ s.hearts=Math.max(0,s.hearts-1);state.incorrect[q.id]=(state.incorrect[q.id]||0)+1 }
    const qxp=ok?3:1;s.xpEarned+=qxp;awardXP(qxp);
    (q.vocabularyIds||[]).forEach(id=>{if(!state.vocabSeen.includes(id))state.vocabSeen.push(id)});
    s.lessonProgress=Math.round((s.answeredSteps.length/Math.max(1,totalExercises(getLesson(s.lessonId))))*100);s.draft=null;saveState();
    document.querySelectorAll('.option').forEach((b,j)=>{b.disabled=true;if(q.options&&q.options[j]===q.correctAnswer)b.classList.add('correct');if(q.options&&q.options[j]===answer&&!ok)b.classList.add('wrong')});
    const f=$('#feedback');
    if(f)f.innerHTML='<div class="feedback '+(ok?'good':'bad')+'"><b>'+(ok?'Correct':'Not quite')+'</b><p>'+esc(q.explanation)+'</p>'+(q.type==='fillBlank'||q.type==='wordOrder'||q.type==='matching'?'<p><b>Answer:</b> '+esc(answerText(q))+'</p>':'')+'<button onclick="continueLesson()">'+(s.currentStepIndex===getLesson(s.lessonId).steps.length-1?'Finish lesson':'Continue')+'</button></div>';
    document.querySelector('.exercise')?.classList.add(ok?'success':'error');
    if(s.hearts===0&&s.currentStepIndex<getLesson(s.lessonId).steps.length-1){setTimeout(()=>{s.hearts=4;saveState()},300)}
  };

  function answerText(q){if(q.type==='matching')return q.pairs.map(p=>p[1]).join(', ');if(q.type==='wordOrder')return q.correctOrder.join(' ');return q.correctAnswer}

  window.continueLesson=function(){
    const s=state.lessonState;if(!s)return;
    const l=getLesson(s.lessonId);if(!l)return;
    const step=l.steps[s.currentStepIndex];
    if(step.type!=='introduction'&&!stepIsAnswered(s,s.currentStepIndex))return;
    if(step.type==='introduction'&&step.vocabularyId&&!state.vocabSeen.includes(step.vocabularyId))state.vocabSeen.push(step.vocabularyId);
    if(s.currentStepIndex<l.steps.length-1){s.currentStepIndex++;saveState();window.renderLesson()}
    else window.finishLesson();
  };

  window.qTotal=function(s){const l=getLesson(s.lessonId);return l?l.steps.length:0};

  window.finishLesson=function(){
    const s=state.lessonState,l=getLesson(s.lessonId);if(!s||!l||s.completed)return;
    s.completed=true;s.lessonProgress=100;
    const first=!state.completed.includes(l.id);if(first)state.completed.push(l.id);
    const completionXP=first?15:0;s.xpEarned+=completionXP;if(completionXP)awardXP(completionXP,'lesson');else saveState();
    checkAchievements();saveState();
    const accuracy=Math.round((s.score/Math.max(1,totalExercises(l)))*100);
    const next=LESSONS[s.currentLesson+1];
    shell('Lesson Complete','<div class="card completion"><div class="reward">✓</div><p class="tag">Lesson complete</p><h1>'+esc(l.title)+'</h1><p>You learned first, then practiced and recalled the new material.</p><div class="grid"><div class="card"><p>Accuracy</p><div class="stat">'+accuracy+'%</div></div><div class="card"><p>XP earned</p><div class="stat">+'+s.xpEarned+'</div></div><div class="card"><p>Practice</p><div class="stat">'+s.score+' / '+totalExercises(l)+'</div></div></div><div class="actions"><button onclick="location.hash=\'#learn\'">Back to course</button>'+(next&&!isLessonComplete(next.id)?'<button onclick="startLesson(\''+next.id+'\')">Next lesson</button>':'')+'</div></div>');
  };

  // Re-run the router after this override is installed so a direct #lesson URL uses the new engine.
  if(typeof router==='function')router();
})();