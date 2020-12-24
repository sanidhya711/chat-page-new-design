var element = document.querySelector(".main");
var input_holder = document.querySelector(".input-bar-holder");
var width = element.offsetWidth-10;
input_holder.style.width=width+"px";

window.addEventListener("resize",function(){
    width = element.offsetWidth-10;
    input_holder.style.width=width+"px";
});

let touchstartX = 0;
let touchendX = 0;

document.querySelector("body").addEventListener('touchstart', function(event){
    touchstartX = event.changedTouches[0].screenX;
},false);

document.querySelector("body").addEventListener('touchend',function(event){
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
},false); 

var users = document.querySelector(".users");

function handleGesture() {
    if (touchendX+65 <= touchstartX) {
        users.classList.remove("users-swipe-left");
        users.classList.add("users-swipe-right");
    }
    if (touchendX >= touchstartX+65) {
        users.classList.remove("users-swipe-right");
        users.classList.add("users-swipe-left");
    }
}
   
