const startScreenDiv = document.querySelector(".start-screen");
const startPlayButton = document.querySelector(".play-button");

startPlayButton.addEventListener("click", () => {
    startScreenDiv.classList.add("screen-fade")

    // fires when .screen-fade transition ends because it's faster
    // than the .play-button transition
    startScreenDiv.addEventListener("transitionend", () => {
        startScreenDiv.remove();    
    })
});