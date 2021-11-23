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


//Reset fill color after click or keypress listener
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
    let userArray = 0

    if (event.key === "p"){ 
        userInput = []
    } else {
    
    let sounds = ["g", "b", "v", "n", "f", "h", "r", "y", "t"]
    
    let key = event.key
    let index = sounds.indexOf(key)

    playNote(index)
    userInput.push(index)

    // only check isMatch()
    // IF userInput is same length as newRandomMelody
    if (userInput.length === newRandomMelody.length) {
        let result = isMatch(userInput, newRandomMelody)
        console.log(`result: ${result}`)
        console.log(`userInput: ${userInput}`)
        console.log(`newRandomMelody: ${newRandomMelody}`)
        } 
    }
});

document.addEventListener("keypress", function onEvent(event) {
if (event.key === "p") {
    randomMelody();
   
    console.log('generate random melody')
    }
})

//Create melody
//create random number and push to new melody
let randomMelody = () => {
    let randomNumber = Math.floor(Math.random()*9)
    console.log(randomNumber)
    newRandomMelody.push(randomNumber)
    
    playRandomMelody()
   
    //nextNote()
    //userInput=[] 
};

console.log(newRandomMelody)

const playRandomMelody = () => {
    for (let i = 0; i < newRandomMelody.length; i++) {
        // for each iteration
        // make a pause after it
        (function (i) {
            setTimeout(
                function () {
                    playNote(newRandomMelody[i])
                    console.log("did we get here?")
                    console.log(newRandomMelody)
                }, 1000 * i);
            })(i);
        };
    }
    

    //if user plays same melody then is able to move to next melody
    
    //check to see if user plays
    
    //else if user does not perform melody than melody is repeated.


//show melody order
const playNote = (e) => { 
    switch (e) {
        case 0:
            playDing()
            setTimeout(
                function() { 
                    console.log('playDing called') 
                    }, 1500)
            break;
        case 1:
            playNote1()
            setTimeout(
                function() { 
                    console.log('playNote1 called') 
                    },1500)
            break;
        case 2:
            playNote2()
            setTimeout(
                function() { 
                    console.log('playNote2 called') 
                    },1500)
            break;
        case 3:
            playNote3()
            setTimeout(
                function() { 
                    console.log('playNote1 called') 
                    },1500)
            break; 
        case 4:
            playNote4()
            setTimeout(
                function() { 
                    console.log('playNote1 called') 
                    },1500)
            break;
        case 5:
            playNote5()
            setTimeout(
                function() { 
                    console.log('playNote1 called')
                    },1500)
            break;
        case 6:
            playNote6()
            setTimeout(
                function() { 
                    console.log('playNote1 called') 
                    },1500)
            break;
        case 7:
            playNote7()
            setTimeout(
                function() { 
                    console.log('playNote1 called') 
                    },1500)
            break;
        case 8:
            playNote8()
            setTimeout(
                function() { 
                    console.log('playNote1 called') 
                    },1500)
            break;
    }
}

function melodyChecker(userArray, computerArray) {
    let doMelodyArraysMatch //created variable
    // doMelodyArraysMatch = true //value assigned to variable
    // doMelodyArraysMatch = false //value assigned to variable
    doMelodyArraysMatch = isMatch(userArray, computerArray)
    // isMatch(userArray, computerArray)
    return doMelodyArraysMatch 
}
//================================================
//================================================
// a and b are arrays
function isMatch(a, b) {
   return a.toString() === b.toString()
}

const arrayA = [1, 2, 3];
const arrayB = [1, 2, 3];



const melodyCheck = (userArray, newRandomMelody) => {
    let doMelodyArraysMatch // true or false
    
    // doMelodyArraysMatch = isMatch(a, b); // true
    // console.log(`doMelodyArraysMatch: ${doMelodyArraysMatch}`)

   
}


//if userInput does not match newMelody array
const tryAgain = () => { 
    document.getElementsByClassName("simonSays").innerHTML = "Try Again? Press 'P'";
}