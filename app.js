
const colors=[
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'pink',
    'black',
    'white',
    'gray',
    'brown',
    'cyan',
    'magenta',
    'lime',
    'teal',
    'indigo',
    'violet',
    'silver',
    'gold',
    'maroon',
    'navy',
    'olive',
    'aqua',
    'fuchsia',
    'crimson',
    'coral',
    'khaki',
    'lavender',
    'turquoise',
    'plum',
    'orchid',
    'salmon',
    'sienna',
    'tan',
    'tomato',
    'wheat',
    'azure',
    'beige',
    'bisque',
    'blanchedalmond',
    'burlywood',
    'chocolate',
    'cornflowerblue',
]


// create a hexidecimal array



const btn =document.getElementById('btn');
const color =document.querySelector('#color');

btn.addEventListener('click',function(){
    // here we created a function that give us  a random number based on the length of the array
    const randomNumber =getRandomNumber(colors.length);

    // here we created a variable that will select the body tag
    let bd= document.body;

    // here we change the background color of the body tag
    bd.style.backgroundColor = colors[randomNumber];

    // here we change the text content of the span tag
    color.textContent = colors[randomNumber];
}
);



 function getRandomNumber(range){
    return Math.floor(Math.random()*range);
}

