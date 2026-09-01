// Runtime hardening layer loaded after app.js. It keeps refresh/resume behavior deterministic without duplicating the lesson engine.
if(!nav.some(n=>n[1]==='flashcards'))nav.splice(3,0,['Flashcards','flashcards']);
const baseRenderLesson=renderLesson;
renderLesson=function(){
  const s=state.lessonState;
  if(s?.completed){state.lessonState=null;save();location.hash='learn';return}
  baseRenderLesson();
  const current=state.lessonState;
  if(!current)return;
  const lesson=lessonById(current.lessonId);
  const answered=current.answeredQuestions.includes(current.currentQuestionIndex);
  if(!answered)return;
  document.querySelectorAll('.exercise .option,.exercise select,.exercise input,.exercise .token,.exercise button:not(.alt)').forEach(b=>b.disabled=true);
  const f=$('#feedback');
  if(f&&!f.innerHTML)f.innerHTML='<div class="feedback good"><b>Answer saved</b><p>This question is already completed. Your progress was restored safely.</p><button onclick="continueLesson()">'+(current.currentQuestionIndex===lesson.exercises.length-1?'Finish lesson':'Continue')+'</button></div>';
};
const baseStartLesson=startLesson;
startLesson=function(id){state.lessonState=null;save();baseStartLesson(id)};
const baseReset=window.resetProgress;
window.resetProgress=function(){if(typeof baseReset==='function')baseReset()};
// Keep the developer review route out of the learner navigation even if the hash is entered directly.
const baseShell=shell;
shell=function(title,html){baseShell(title,html);document.querySelectorAll('.side nav a').forEach(a=>{if(a.getAttribute('href')==='#content-review')a.remove()})};
router();