// alert('hekko')
const sounds = {k: 'sounds/crash.mp3',
    l: 'sounds/kick-bass.mp3',
    j: 'sounds/snare.mp3',
    w: 'sounds/tom-1.mp3',
    a: 'sounds/tom-2.mp3',
    s: 'sounds/tom-3.mp3',
    d: 'sounds/tom-4.mp3'
}

// w drum

function playSound(a) {
    const audioElement = new Audio(sounds[a]);
    audioElement.play(); 
    // console.log('Sound Played')
}

const drum = document.querySelectorAll('.drum')
function drumClick(e) {
    const fElement = e.srcElement.getAttribute('class').split(' ')[0]
    playSound(fElement)
    // console.log('Clicked')
}

function keyClick(e) {
    playSound(e.key.toLowerCase())
}

document.addEventListener('keyup',keyClick);
  
for(let i=0;i<drum.length;i++){
    drum[i].addEventListener("click",drumClick)
}
// console.log('DRUM:',drum);
