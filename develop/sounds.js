function makeNoise(e) {
  // This is how we would use an attribute selector to select one of the data keys
  // const audio = document.querySelector('audio[data-key=65')

  // We are going to change the variable audio above to one that select what is being passed through the event by using back ticks and es6 template literal instead
  const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // When I press a keyboard key, I am able to play the sound
  if (!audio) return;

  // When I press a key repeatedly, there is no delay in the sound
  audio.currentTime = 0;
  audio.play();

  // When I press a keyboard key, the button enlarges and the outerborder glows
  key.classList.add("pressed");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("pressed");
  console.log(this);
}

let keys = document.querySelectorAll(`.key`);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// When I press a keyboard key the specific keycode is targeted
document.addEventListener("keydown", makeNoise);
