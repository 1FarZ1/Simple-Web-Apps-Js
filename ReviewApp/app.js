let current_review=0;
import reviews from './reviews.js';

const elm= document.querySelector(".review").children;


document.querySelector(".button-container").addEventListener("click", function (e) {
  if (e.target.classList.contains("prev-btn") && current_review>0) {
      current_review--;
  }
  else if (e.target.classList.contains("next-btn") && current_review<reviews.length-1) {
      current_review++;
  }
  update();


});


document.querySelector(".random-btn").addEventListener("click", function (e) {
  current_review=Math.floor(Math.random()*reviews.length);
  update();
});


function update() {

  elm[0].children[0].src=reviews[current_review].img;
  elm[1].innerHTML=reviews[current_review].name;
  elm[2].innerHTML=reviews[current_review].job;
  elm[3].innerHTML=reviews[current_review].text;
}