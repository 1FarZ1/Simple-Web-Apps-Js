const btns = document.querySelectorAll(".question-btn");

btns.forEach( (btn)=> {
  btn.addEventListener("click",  (e)=> {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});