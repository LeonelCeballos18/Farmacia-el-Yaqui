function imagenRandom(){
    let nImg = Math.round(Math.random(1)*3);
    return nImg;
}


let btnUp = document.getElementById('btnUp');
btnUp.addEventListener('click', ()=>{
    document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

gsap.from('.navbar .nav_item', {opacity: 0, duration: 0.7, delay: 0.7, y:30, stagger: 0.2})
gsap.from('.logo', {opacity: 0, duration: 0.7, delay: 0.7, y:10})
gsap.from('.title', {opacity: 0, duration: 0.7, delay: 0.7, y:30})
gsap.from('.description', {opacity: 0, duration: 0.7, delay: 0.7, y:30})
gsap.from('.btnUp', {opacity: 0, duration: 0.7, delay: 0.7, y:30})