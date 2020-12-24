let touchstartX = 0;
let touchendX = 0;
var message = document.querySelector(".swipe-message");

document.querySelector("body").addEventListener('touchstart', function(event){
    touchstartX = event.changedTouches[0].screenX;
},false);

document.querySelector("body").addEventListener('touchend',function(event){
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
},false); 

function handleGesture() {
    if (touchendX+50 <= touchstartX) {
        console.log('Swiped left');
        message.innerText = "swipe left"
    }
    if (touchendX >= touchstartX+50) {
        console.log('Swiped right');
        message.innerText = "swipe right"
    }
}