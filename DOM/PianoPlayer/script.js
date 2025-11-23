var allKeys = document.querySelectorAll(".piano .key");

allKeys.forEach((key, i) => {
  key.addEventListener("click", function () {
    const music = "./mp3sounds/key" + i + ".wav";
    const audio = new Audio(music);
    audio.play();
  });
});
