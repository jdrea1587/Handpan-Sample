//Melody create empty array to store sequence
let newRandomMelody = []
let userInput = []

//Select html element by id
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

notesArray[0].addEventListener("ended", function(){
    notesArray[0].currentTime = 0;
    clickDing.style.fill = "grey"
});
notesArray[1].addEventListener("ended", function(){
    notesArray[1].currentTime = 0;
    clickNote1.style.fill = "grey"
});
notesArray[2].addEventListener("ended", function(){
    notesArray[2].currentTime = 0;
    clickNote2.style.fill = "grey"
});
notesArray[3].addEventListener("ended", function(){
    notesArray[3].currentTime = 0;
    clickNote3.style.fill = "grey"
});
notesArray[4].addEventListener("ended", function(){
    notesArray[4].currentTime = 0;
    clickNote4.style.fill = "grey"
});
notesArray[5].addEventListener("ended", function(){
    notesArray[5].currentTime = 0;
    clickNote5.style.fill = "grey"
});
notesArray[6].addEventListener("ended", function(){
    notesArray[6].currentTime = 0;
    clickNote6.style.fill = "grey"
});
notesArray[7].addEventListener("ended", function(){
    notesArray[7].currentTime = 0;
    clickNote7.style.fill = "grey"
});
notesArray[8].addEventListener("ended", function(){
    notesArray[8].currentTime = 0;
    clickNote8.style.fill = "grey"
});

document.addEventListener("keypress", function onEvent(event) {
    let sounds = ["g", "b", "v", "n", "f", "h", "r", "y", "t"]
    
    let key = event.key
    let index = sounds.indexOf(key)

    playNote(index)
    userInput.push(index)

    if (userInput.length === newRandomMelody.length) {
        let result = isMatch(userInput, newRandomMelody)
       
        if (result === true) {
            setTimeout(
                function () {
                    userInput = []
                    goToNextRound()
                }, 2000);
        } else {
            restartGame()
            alert('Game Over, press \'P\' to try again')
        }
    }
});

const goToNextRound = () => {
    randomMelody()
}

const restartGame = () => {
    userInput = []
    newRandomMelody = []
}

document.addEventListener("keypress", function onEvent(event) {
if (event.key === "p") {
    userInput = []
    randomMelody();
    }
})

//Create random number and push to newRandomMelody
let randomMelody = () => {
    let randomNumber = Math.floor(Math.random()*9)
    newRandomMelody.push(randomNumber)
    playRandomMelody()  
};

//Create melody
const playRandomMelody = () => {
    for (let i = 0; i < newRandomMelody.length; i++) {
        (function (i) {
            setTimeout(
                function () {
                    playNote(newRandomMelody[i])
                }, 2000 * i);
            })(i);
        };
    }
    
const playNote = (e) => { 
    switch (e) {
        case 0:
            playDing()
            setTimeout(
                function() {  
                    }, 1500)
            break;
        case 1:
            playNote1()
            setTimeout(
                function() { 
                    },1500)
            break;
        case 2:
            playNote2()
            setTimeout(
                function() { 
                    },1500)
            break;
        case 3:
            playNote3()
            setTimeout(
                function() { 
                    },1500)
            break; 
        case 4:
            playNote4()
            setTimeout(
                function() {  
                    },1500)
            break;
        case 5:
            playNote5()
            setTimeout(
                function() { 
                    },1500)
            break;
        case 6:
            playNote6()
            setTimeout(
                function() {  
                    },1500)
            break;
        case 7:
            playNote7()
            setTimeout(
                function() {  
                    },1500)
            break;
        case 8:
            playNote8()
            setTimeout(
                function() {  
                    },1500)
            break;
    }
}

//Accepts two arrays compare their truthiness as strings
function isMatch(a, b) {
   return a.toString() === b.toString()
}
