// detecting button pressed
var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}
// detecting keyboard pressed
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);


});

function makeSound(key) {
  switch (key) {
    case "q":
      var audio = new Audio("sound/workit.mp3");
      audio.play();
      break;
    case "w":
      var audio1 = new Audio("sound/makeit.mp3");
      audio1.play();
      break;
    case "e":
      var audio2 = new Audio("sound/doit.mp3");
      audio2.play();
      break;
    case "r":
      var audio3 = new Audio("sound/makesus.mp3");
      audio3.play();
      break;
    case "t":
      var audio4 = new Audio("sound/harder.mp3");
      audio4.play();
      break;
    case "y":
      var audio5 = new Audio("sound/better.mp3");
      audio5.play();
      break;
    case "u":
      var audio6 = new Audio("sound/faster.mp3");
      audio6.play();
      break;
    case "i":
      var audio7 = new Audio("sound/stronger.mp3");
      audio7.play();
      break;
    case "o":
      var audio8 = new Audio("sound/morethan.mp3");
      audio8.play();
      break;
    case "p":
      var audio9 = new Audio("sound/hour.mp3");
      audio9.play();
      break;
    case "a":
      var audio10 = new Audio("sound/our.mp3");
      audio10.play();
      break;
    case "s":
      var audio11 = new Audio("sound/never.mp3");
      audio11.play();
      break;
    case "d":
      var audio12 = new Audio("sound/ever.mp3");
      audio12.play();
      break;
    case "f":
      var audio13 = new Audio("sound/after.mp3");
      audio13.play();
      break;
    case "g":
      var audio14 = new Audio("sound/workis.mp3");
      audio14.play();
      break;
    case "h":
      var audio15 = new Audio("sound/over.mp3");
      audio15.play();
      break;
    case "j":
      var audio16 = new Audio("sound/workit.mp3");
      audio16.play();
      break;
    case "k":
      var audio17 = new Audio("sound/harder2.mp3");
      audio17.play();
      break;
    case "l":
      var audio18 = new Audio("sound/makeit2.mp3");
      audio18.play();
      break;
    case "z":
      var audio19 = new Audio("sound/better2.mp3");
      audio19.play();
      break;
    case "x":
      var audio20 = new Audio("sound/doit2.mp3");
      audio20.play();
      break;
    case "c":
      var audio21 = new Audio("sound/faster2.mp3");
      audio21.play();
      break;
    case "v":
      var audio22 = new Audio("sound/makesus2.mp3");
      audio22.play();
      break;
    case "b":
      var audio23 = new Audio("sound/stronger2.mp3");
      audio23.play();
      break;
    case "n":
      var audio24 = new Audio("sound/morethan2.mp3");
      audio24.play();
      break;
    case "m":
      var audio25 = new Audio("sound/ever2.mp3");
      audio25.play();
      break;
    case "1":
      var audio26 = new Audio("sound/hour2.mp3");
      audio26.play();
      break;
    case "2":
      var audio27 = new Audio("sound/after2.mp3");
      audio27.play();
      break;
    case "3":
      var audio28 = new Audio("sound/our2.mp3");
      audio28.play();
      break;
    case "4":
      var audio29 = new Audio("sound/workis2.mp3");
      audio29.play();
      break;
    case "5":
      var audio30 = new Audio("sound/never2.mp3");
      audio30.play();
      break;
    case "6":
      var audio31 = new Audio("sound/over2.mp3");
      audio31.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 500);
}
