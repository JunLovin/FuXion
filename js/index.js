const images = document.querySelector('#images');
let image = ['img/section2.jpg','img/section3.jpg'];
setInterval(function(){
    let random = Math.floor(Math.random() * 2);
    images.src = image[random];
}, 800);