

// import get random number function from app.js
// import { getRandomNumber } from 'app.js';




const colors=[
    0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn =document.getElementById('btn');
const color =document.querySelector('#color');

btn.addEventListener('click',function(){
    let hexColor ='#';
    for(let i=0;i<6;i++){
        let randomNumber =getRandomNumber(colors.length);
        hexColor += colors[randomNumber];
    }

    let bd= document.body;
    bd.style.backgroundColor = hexColor;
    color.textContent = hexColor;

})








 function getRandomNumber(range){
    return Math.floor(Math.random()*range);
}


