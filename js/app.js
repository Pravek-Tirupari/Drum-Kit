const keys = document.querySelectorAll(".keyboard__key");

const song1 = document.querySelector("audio");

const playSound = function (key) {
  const audio = document.querySelector(`audio[data-key=${key}]`);

  if (!audio) return; //If NO audio file for that key, then do nothing
  audio.currentTime = 0;
  audio.play();
};

window.addEventListener("keydown", function (e) {
  const keyPressed = e.key.toUpperCase();
  //Insert Animation
  const key = document.querySelector(`.keyboard__key[data-key=${keyPressed}]`);
  key.classList.add("playing");
  //Play the sound
  playSound(keyPressed);
  //Remove the playing effect
  key.addEventListener("transitionend", function () {
    key.classList.remove("playing");
  });
});
