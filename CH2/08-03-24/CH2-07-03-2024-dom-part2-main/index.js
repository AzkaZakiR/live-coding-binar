// alert("HEyy kelas");


function handleKlik(event){
    alert("Ada yg klik faf nih!!")
}
let buttons = document.querySelectorAll(".drum");
console.log(buttons);
for (let i =0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        // console.log(this.innerHTML);      
        let btnInHtml = this.innerHTML;

        makeSound(btnInHtml)
        buttonAnim(btnInHtml)
    });
}

document.addEventListener("keypress", function(){
    makeSound(event.key)
    buttonAnim(event.key)
    // console.log(event.key)
} )

function makeSound(event){
    var audio;

    switch(event){
        case "w": 
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            alert("No button");
    }
    audio.play();
}

function buttonAnim(event){
    let activeBtn = document.querySelector("."+event);
    console.log("Active btn" + activeBtn);
    activeBtn.classList.add("pressed");
    activeBtn.classList.add("white");
    
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
        activeBtn.classList.remove("white");
    }, 100)
} 
// var audio = new Audio('sounds/snare.mp3');
//         audio.play();
   