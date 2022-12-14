/*===== preloader animation =====*/
// anime.min.js, tweenmax.min.js
var textWrapper = document.querySelector(".preloader-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".preloader-title .letter",
    translateX: [0, -140],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: function(el, i) {
        return 700 + 50 * i;
    }
});

TweenMax.to(".loader", 2.2, {
    delay: 2,
    top: "-200%",
    ease: Expo.easeInOut
});

TweenMax.to(".data", 2.2, {
    delay: 2,
    top: "-200%",
    ease: Expo.easeInOut
});