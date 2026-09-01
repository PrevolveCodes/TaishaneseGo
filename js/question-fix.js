// Multiple-choice/listening fix: the lesson engine compares answers to the answer value,
// but the old handler passed the option's numeric index. Pass the actual option value instead.
window.chooseOption=function(i){
  const q=currentQuestion();
  const s=state.lessonState;
  if(!q||!s||s.answeredQuestions.includes(s.currentQuestionIndex)||!q.options)return;
  const buttons=document.querySelectorAll('.option');
  buttons.forEach((b,j)=>{b.disabled=true;if(j===i)b.classList.add('selected')});
  submitQuestion(q.options[i]);
};
