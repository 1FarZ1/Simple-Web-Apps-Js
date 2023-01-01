




let buttons = document.querySelectorAll('.btn');
let count =document.getElementById('value');


buttons.forEach(
function(button){

button.addEventListener('click',function(e){
    console.log(e.currentTarget.classList);
    let classes= e.currentTarget.classList;
  
   if(classes.contains('increase')){
        count.innerHTML = parseInt(count.innerHTML) + 1;
   }
   else if(classes.contains('decrease')){
        count.innerHTML = parseInt(count.innerHTML) - 1;
   }

    else {
        count.innerHTML = 0;
    }
if(parseInt(count.innerHTML) > 0){
    count.style.color = 'green';
}
else if(parseInt(count.innerHTML) < 0){
    count.style.color = 'red';
}
else {
    count.style.color = 'black';
}

});
});