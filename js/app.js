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

//Select audio file
const selectDing = new Audio('./mp3/panDingD.mp3')
const selectPanNote1 = new Audio('./mp3/panNoteA.mp3')
const selectPanNote2 = new Audio('./mp3/panNoteB.mp3') 
const selectPanNote3 = new Audio('./mp3/panNoteC.mp3')
const selectPanNote4 = new Audio('./mp3/panNoteD.mp3')
const selectPanNote5 = new Audio('./mp3/panNoteE.mp3')
const selectPanNote6 = new Audio('./mp3/panNoteF.mp3')
const selectPanNote7 = new Audio('./mp3/panNoteG.mp3')
const selectPanNote8 = new Audio('./mp3/panNoteAa.mp3')

//Play sound
const playDing = () => {
    selectDing.currentTime = 0; //play same note repetitively!

    clickDing.style.fill = "blue"
    console.log("color")

    selectDing.play()
    console.log("did 3e gert here?")
    

    }
const playNote1 = () => {
    selectPanNote1.play();
    }   
const playNote2 = () => { 
    selectPanNote2.play();
}  
const playNote3 = () => {
    selectPanNote3.play();
} 
const playNote4 = () => {
    selectPanNote4.play();
}  
const playNote5 = () => {
    selectPanNote5.play();
}   
const playNote6 = () => {
    selectPanNote6.play();
}   
const playNote7 = () => {
    selectPanNote7.play();
} 
const playNote8 = () => {
    selectPanNote8.play();
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
selectDing.addEventListener("ended", function(){
    selectDing.currentTime = 0;
    clickDing.style.fill = "grey"
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




const melody = [
    playDing,
    playNote1,
    playNote1,
    playNote4
]
const playMelody = () => {
    melody
}
playMelody()
