var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      new Audio("Drum-Kit/sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("Drum-Kit/sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("Drum-Kit/sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("Drum-Kit/sounds/sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("Drum-Kit/sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("Drum-Kit/sounds/crash.mp3").play();
      break;

    case "l":
      new Audio("Drum-Kit/sounds/kick-bass.mp3").play();
      break;

    default:
      console.log(key);
  }

}






