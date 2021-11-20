console.log('groovin')

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
const playKurdDDing = new Audio('./mp3/kurdDDing.mp3')
const playPanNote1 = new Audio('./mp3/panNoteA.mp3')
const playPanNote2 = new Audio('.mp3/panNoteBb.mp3')
const playPanNote3 = new Audio('./mp3/panNoteC.mp3')
const playPanNote4 = new Audio('./mp3/panNoteD.mp3')
const playPanNote5 = new Audio('./mp3/panNoteE.mp3')
const playPanNote6 = new Audio('./mp3/panNoteF.mp3')
const playPanNote7 = new Audio('./mp3/panNoteG.mp3')
const playPanNote8 = new Audio('./mp3/panNoteAa.mp3')

//Play sound
const playDing = () => {
    playKurdDDing.play(); 
    }
const playNote1 = () => {
    playPanNote1.play();
    }   
const playNote2 = () => {
    playPanNote2.play();
}  
const playNote3 = () => {
    playPanNote3.play();
} 
const playNote4 = () => {
    playPanNote4.play();
}  
const playNote5 = () => {
    playPanNote5.play();
}   
const playNote6 = () => {
    playPanNote6.play();
}   
const playNote7 = () => {
    playPanNote7.play();
} 
const playNote8 = () => {
    playPanNote8.play();
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


// //function play mp3 audio
// const playDing = () => {
//     const playkurdDDing = new Audio('./mp3/kurdDDing.mp3')
//     playkurdDDing.play();
//     console.log(playDing)
//     console.log(playkurdDDing)  
// }
// //select g element and add click listener
// const clickDing = document.getElementById('panNoteDing')
// clickDing.addEventListener("click", playDing)
// //console.log(clickDing)

// //play audio with from html audio element: 
// document.getElementById('myAudioTagID').play();

// //play audio with out html audio tag
// var myAudio = new Audio('my_great_song.mp3');
// myAudio.play();