const panels = document.querySelectorAll('.panel');

function toggleshit(){
    this.classList.toggle('open');
}
function toggleMan(e){
    // console.log(e);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    
}

panels.forEach(panel => panel.addEventListener('click',toggleshit));
panels.forEach(panel => panel.addEventListener('transitionend',toggleMan));