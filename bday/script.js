const envelope = document.getElementById("envelope");
const video = document.getElementById("video");
const balloonContainer = document.getElementById("balloon-container");

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // random color
  const colors = ["#ff4d6d", "#ffb347", "#6a5acd", "#00c49a", "#ff69b4"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  // random position
  balloon.style.left = Math.random() * 100 + "vw";

  // random size
  const size = Math.random() * 30 + 30;
  balloon.style.width = size + "px";
  balloon.style.height = size * 1.5 + "px";

  balloonContainer.appendChild(balloon);

  // remove after animation
  setTimeout(() => {
    balloon.remove();
  }, 6000);
}

envelope.addEventListener("click", () => {
  // Open envelope
  envelope.classList.add("open");

  // Start balloons
  const balloonInterval = setInterval(createBalloon, 200);

  // After 3 seconds, show video
  setTimeout(() => {
    clearInterval(balloonInterval);

    video.style.width = "200px";
    video.style.opacity = "1";
    video.play();

    // Go fullscreen after short delay
    setTimeout(() => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { 
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
      }
    }, 1200);
  }, 3000);
});
