//Melody create empty array to store sequence
let newMelody = []
let userInput = []

//Select html element
const clickDing = document.getElementById('panNoteDing')
const clickNote1 = document.getElementById('panNote1')
const clickNote2 = document.getElementById('panNote2')
const clickNote3 = document.getElementById('panNote3')
const clickNote4 = document.getElementById('panNote4')
const clickNote5 = document.getElementById('panNote5')
const clickNote6 = document.getElementById('panNote6')
const clickNote7 = document.getElementById('panNote7')
const clickNote8 = document.getElementById('panNote8')

//Select audio file => Convert to an array
const notesArray = [new Audio('./mp3/panDingD.mp3'), new Audio('./mp3/panNoteA.mp3'), new Audio('./mp3/panNoteB.mp3'), new Audio('./mp3/panNoteC.mp3'), new Audio('./mp3/panNoteD.mp3'), new Audio('./mp3/panNoteE.mp3'), new Audio('./mp3/panNoteF.mp3'), new Audio('./mp3/panNoteG.mp3'), new Audio('./mp3/panNoteAa.mp3')]

//Play sound
const playDing = () => {
    notesArray[0].currentTime = 0;
    clickDing.style.fill = "blue"
    notesArray[0].play()
    }
const playNote1 = () => {
    notesArray[1].currentTime = 0;
    clickNote1.style.fill = "blue"
    notesArray[1].play();
    }   
const playNote2 = () => { 
    notesArray[2].currentTime = 0;
    clickNote2.style.fill = "blue"
    notesArray[2].play();
}  
const playNote3 = () => {
    notesArray[3].currentTime = 0;
    clickNote3.style.fill = "blue"
    notesArray[3].play();
} 
const playNote4 = () => {
    notesArray[4].currentTime = 0;
    clickNote4.style.fill = "blue"
    notesArray[4].play();
}  
const playNote5 = () => {
    notesArray[5].currentTime = 0;
    clickNote5.style.fill = "blue"
    notesArray[5].play();
}   
const playNote6 = () => {
    notesArray[6].currentTime = 0;
    clickNote6.style.fill = "blue"
    notesArray[6].play();
}   
const playNote7 = () => {
    notesArray[7].currentTime = 0;
    clickNote7.style.fill = "blue"
    notesArray[7].play();
} 
const playNote8 = () => {
    notesArray[8].currentTime = 0;
    clickNote8.style.fill = "blue"
    notesArray[8].play();
}    
//Click Event       
clickDing.addEventListener("click", playDing)
clickNote1.addEventListener("click", playNote1)
clickNote2.addEventListener("click", playNote2) 
clickNote3.addEventListener("click", playNote3)
clickNote4.addEventListener("click", playNote4)
clickNote5.addEventListener("click", playNote5)
clickNote6.addEventListener("click", playNote6)
clickNote7.addEventListener("click", playNote7)
clickNote8.addEventListener("click", playNote8)

//Reset fill color
notesArray[0].addEventListener("ended", function(){
    notesArray[0].currentTime = 0;
    clickDing.style.fill = "grey"
    console.log("ended");
});
notesArray[1].addEventListener("ended", function(){
    notesArray[1].currentTime = 0;
    clickNote1.style.fill = "grey"
    console.log("ended");
});
notesArray[2].addEventListener("ended", function(){
    notesArray[2].currentTime = 0;
    clickNote2.style.fill = "grey"
    console.log("ended");
});
notesArray[3].addEventListener("ended", function(){
    notesArray[3].currentTime = 0;
    clickNote3.style.fill = "grey"
    console.log("ended");
});
notesArray[4].addEventListener("ended", function(){
    notesArray[4].currentTime = 0;
    clickNote4.style.fill = "grey"
    console.log("ended");
});
notesArray[5].addEventListener("ended", function(){
    notesArray[5].currentTime = 0;
    clickNote5.style.fill = "grey"
    console.log("ended");
});
notesArray[6].addEventListener("ended", function(){
    notesArray[6].currentTime = 0;
    clickNote6.style.fill = "grey"
    console.log("ended");
});
notesArray[7].addEventListener("ended", function(){
    notesArray[7].currentTime = 0;
    clickNote7.style.fill = "grey"
    console.log("ended");
});
notesArray[8].addEventListener("ended", function(){
    notesArray[8].currentTime = 0;
    clickNote8.style.fill = "grey"
    console.log("ended");
});


document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "g") {
        playDing();
    }
    if (event.key === "b") {
        playNote1();
        console.log('this will be a note panNote1')
    } 
    if (event.key === "v") {
        playNote2();
        console.log('this will be Bb note panNote2')
    }
    if (event.key === "n") {
        playNote3();
        console.log('this will be C note panNote3')
    }
    if (event.key === "f") {
        playNote4();
        console.log('this will be D note panNote4')
    }
    if (event.key === "h") {
        playNote5();
        console.log('this will be E note panNote5')
    }
    if (event.key === "r") {
        playNote6();
        console.log('this will be F note panNote6')
    }
    if (event.key === "y") {
        playNote7();
        console.log('this will be G note panNote7')
    }
    if (event.key === "t") {
        playNote8();
        console.log('this will be A note panNote8')
    }
});



// Start button plays a melody or enter
//if user plays same melody then is able to move to next melody
//else if user does not perform melody than melody is repeated.


