window.onload = () =>{
    let direccion;
    let nrandom;

    let arrayImg = ['./sources/img/1.webp', './sources/img/2.webp', './sources/img/3.webp', './sources/img/4.webp'];

    let i1 = document.getElementById('imgOferta1');
    let i2 = document.getElementById('imgOferta2');
    let i3 = document.getElementById('imgOferta3');
    let i4 = document.getElementById('imgOferta4');

    for(let i=0; i<=4; i++){
        nrandom = imagenRandom();
        if(nrandom != direccion){
            i1.setAttribute("src", arrayImg[nrandom]);
        }
    }
}

function imagenRandom(){
    let nImg = Math.round(Math.random(1)*3);
    return nImg;
}

gsap.from('.navbar .nav_item', {opacity: 0, duration: 0.7, delay: 0.7, y:30, stagger: 0.2})
gsap.from('.logo', {opacity: 0, duration: 0.7, delay: 0.7, y:10})
gsap.from('.title', {opacity: 0, duration: 0.7, delay: 0.7, y:30})
gsap.from('.description', {opacity: 0, duration: 0.7, delay: 0.7, y:30})