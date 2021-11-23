const startScreenDiv = document.querySelector(".start-screen");
const startPlayButton = document.querySelector(".play-button");

startPlayButton.addEventListener("click", () => {
    startScreenDiv.remove();
});