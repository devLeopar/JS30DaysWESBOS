window.addEventListener('keydown',function(e){   
const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[0];
const box = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)[0];
//this.console.log(box);
if(!audio) return; // stop function from null keyword
audio.currentTime = 0;
audio.play();
box.classList.add('playing');
});

function removeIt(e){

    if(e.propertyName !== 'transform') return; // if another property returned skip it bitch
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeIt));

//or whatevaa
/*window.addEventListener('keyup',function(e){   
    const box = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)[0];
    box.classList.remove('playing');
    });*/