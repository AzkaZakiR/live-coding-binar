let randomNUm1 = Math.floor(Math.random() * 6) +1;
console.log(randomNUm1);

var randomDiceImg = `dice${randomNUm1}.png`;
const randomImgSource1 = `images/${randomDiceImg}`;

let img1 = document.querySelectorAll('img')[0];

img1.setAttribute('src', randomImgSource1);


//set random number for player 2 
let randomNUm2 = Math.floor(Math.random() * 6) +1;
var randomDiceImg2 = `dice${randomNUm2}.png`;
const randomImgSource2 = `images/${randomDiceImg2}`;
let img2 = document.querySelectorAll('img')[1];
img2.setAttribute('src', randomImgSource2);

if(randomNUm1 > randomNUm2){
    document.querySelector("h1").innerText = "Player 1 Win!!"
} else if(randomNUm2 > randomNUm1){
    document.querySelector("h1").innerText = "Player 2 Win!!"
} else{
    document.querySelector("h1").innerText = "The Result is draw!!"
}