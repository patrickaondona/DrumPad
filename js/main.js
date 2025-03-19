const mainBody = document.querySelector("body");
mainBody.classList.add("body-1");

function changeBg() {
  const mainBody = document.querySelector("body");
  switch (true) {
    case mainBody.classList.contains("body-1"):
      mainBody.classList.remove("body-1");
      mainBody.classList.add("body-2");
      break;
    case mainBody.classList.contains("body-2"):
      mainBody.classList.remove("body-2");
      mainBody.classList.add("body-3");
      break;
    case mainBody.classList.contains("body-3"):
      mainBody.classList.remove("body-3");
      mainBody.classList.add("body-1");
      break;

    default:
      mainBody.classList.add("body-1");
      break;
  }
}

setInterval(changeBg, 4000);

function removeTransformAndBorder(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  e.target.classList.remove("playing");
}

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");

for (i = 0; i <= keys.length; i++) {
  keys[i].addEventListener("transitionend", removeTransformAndBorder);
}

