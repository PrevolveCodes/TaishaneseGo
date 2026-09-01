// Communicative-learning telemetry. Exposure is not mastery: track how each item is
// introduced, recognized, used in context, recalled, or flagged for review.
(function(){
  state.vocabProgress=state.vocabProgress&&typeof state.vocabProgress==='object'?state.vocabProgress:{};
  const ensure=id=>state.vocabProgress[id]||(state.vocabProgress[id]={introduced:0,seen:0,recognized:0,usedInContext:0,answeredCorrectly:0,struggled:0,reviewNeeded:false,lastSeen:null});
  const mark=(ids,field)=>{
    (ids||[]).forEach(id=>{const p=ensure(id);p[field]=(p[field]||0)+1;p.seen=(p.seen||0)+1;p.lastSeen=new Date().toISOString()});
    save();
  };
  const baseStart=window.startLesson;
  window.startLesson=function(id){
    if(typeof baseStart==='function')baseStart(id);
    const s=state.lessonState,l=s&&LESSONS.find(x=>x.id===s.lessonId);
    if(!l)return;
    l.steps.filter(x=>x.type==='introduction'&&x.vocabularyId).forEach(x=>{const p=ensure(x.vocabularyId);p.introduced=(p.introduced||0)+1;p.lastSeen=new Date().toISOString()});
    save();
  };
  const baseSubmit=window.submitQuestion;
  window.submitQuestion=function(answer){
    const s=state.lessonState,q=s&&LESSONS.find(l=>l.id===s.lessonId)?.steps[s.currentStepIndex];
    const beforeScore=s?.score||0,beforeAttempts=s?.attempts||0;
    if(typeof baseSubmit==='function')baseSubmit(answer);
    if(!q||q.type==='introduction'||!s||s.attempts===beforeAttempts)return;
    const correct=(s.score||0)>beforeScore;
    (q.vocabularyIds||[]).forEach(id=>{
      const p=ensure(id);p.seen=(p.seen||0)+1;p.lastSeen=new Date().toISOString();
      if(correct)p.answeredCorrectly=(p.answeredCorrectly||0)+1;else{p.struggled=(p.struggled||0)+1;p.reviewNeeded=true}
      if(['context','combine','communicate'].includes(q.stage))p.usedInContext=(p.usedInContext||0)+1;
      if(['understand','recognizePhrase','notice','reinforce'].includes(q.stage))p.recognized=(p.recognized||0)+1;
    });
    save();
  };
  const baseContinue=window.continueLesson;
  window.continueLesson=function(){
    const s=state.lessonState,l=s&&LESSONS.find(x=>x.id===s.lessonId),step=l&&l.steps[s.currentStepIndex];
    if(step?.type==='introduction'&&step.vocabularyId){const p=ensure(step.vocabularyId);p.introduced=(p.introduced||0)+1;p.seen=(p.seen||0)+1;p.lastSeen=new Date().toISOString();save()}
    if(typeof baseContinue==='function')baseContinue();
  };
  // Migration: preserve the old vocabSeen list while giving it richer exposure records.
  (state.vocabSeen||[]).forEach(id=>{const p=ensure(id);if(!p.seen)p.seen=1});
  save();
})();
