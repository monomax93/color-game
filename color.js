
var colors = [];
var goalColor;
var goalColorSelector = document.querySelector("#header span");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
var mode = 6;

function init(mode) {
  //create array of colors
  colors = [];
  for (var i = 0; i < mode; i++) {
    colors.push(createRGB());
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    // squares[i].classList.remove = "hidden";
    if (mode < 6 && i > 2) {
      squares[i].classList.add("hidden");
    } else {
      squares[i].classList.remove("hidden");
    }
  }
  goalColor = colors[randN(mode - 1)];
  goalColorSelector.textContent = goalColor;
  document.querySelector("#header").style.background = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}

function createRGB() {
  return "rgb(" + randN() + ", " + randN() + ", " + randN() + ")";
}

function randN(maxNumber = 225) {
  return Math.floor(Math.random() * (maxNumber - 0 + 1)) + 0;
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

hardButton.addEventListener("click", function () {
  mode = 6;
  init(mode);
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
});
easyBtn.addEventListener("click", function () {
  mode = 3;
  init(mode);
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
})
//this is default load-on init
init(mode);

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (this.style.background === goalColor) {
      messageDisplay.textContent = "You WON! Play again?";
      resetButton.textContent = "Play Again";
      document.querySelector("#header").style.background = goalColor;
      changeColors(goalColor);
    } else {
      messageDisplay.textContent = "Try again";
      this.style.background = "#232323";
    }
  });
}

resetButton.addEventListener("click", function () {
  init(mode);
});