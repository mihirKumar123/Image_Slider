let left=document.querySelector(".left");
let right=document.querySelector(".right");
let slider=document.querySelector(".slider");
const image=document.querySelectorAll(".image");

slider.style.transition="2s"

let l=image.length;

const nextSlide=()=>{
    slider.style.transform= `translatex(-${slidernumber*168}px)`;
    slidernumber++; 
}
const prevSlide=()=>{
    slider.style.transform= `translatex(-${(slidernumber-2)*168}px)`;
    slidernumber--; 
}
const getFirstSlide=()=>{
    slider.style.transform= `translatex(0px)`;
    slidernumber=1;
}
const getLastSlide=()=>{
    slider.style.transform= `translatex(-${(l-1)*168}px)`;
    slidernumber=l;
}

let slidernumber=1;
function shiftright(){   
    slidernumber < l ? nextSlide() : getFirstSlide();
}
function shiftleft(){
    slidernumber > 1 ? prevSlide() : getLastSlide();
}
