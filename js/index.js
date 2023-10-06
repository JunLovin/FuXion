const images = document.querySelector('#images');
let image = ['img/section2.jpg','img/section3.jpg'];
setInterval(function(){
    let random = Math.floor(Math.random() * 2);
    images.src = image[random];
}, 800);

function readM() {
    let dots = document.querySelector('.dots');
    let moreT = document.querySelector('.moreT');
    let moreTButton = document.querySelector('#readMBtn');

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        moreTButton.innerHTML = "Ver más";
        moreT.style.display = "none";
    } else {
        dots.style.display = "none";
        moreTButton.innerHTML = "Ver menos";
        moreT.style.display = "inline-block";
    }
}