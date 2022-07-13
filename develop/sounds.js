// When I press a keyboard key the specific screen button is targeted
// When I press a keyboard key, the button enlarges and the outerborder glows
// When I press a keyboard key, I am able to play the sound
// When I press a key repeatedly, there is no delay in the sound

function makeNoise() {
  let key = document.querySelector(".key");
  key.classList.add(".pressed");
}

document.addEventListener("keydown", function (event) {
  console.log(event);
});
