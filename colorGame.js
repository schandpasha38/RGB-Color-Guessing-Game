// // Simple excercise

//console.log("Working \u2665");

//Will be giving RGB color code in header "reser templet" to guess with option varianing from easy (3 Options) and hard (6 Options)
//Header should have a default color of blue and when the answer is correct the color should turn to the correct answer
//We should have 3 options below header "refer templet".

var colors = randomNumbers(6);

var circles = document.getElementsByClassName("circles");
var colorDisplay = document.getElementById("colorDisplay");
var headerColor = document.getElementById("header");
var gameStatus = document.getElementById("gameStatus");

addingDivs(6);

document.getElementById("easyButton").addEventListener("click", function () {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  hardMode = false;
  generalMode = false;
  easyMode = true;
  removeDivs();
  addingDivs(3);
  reset();
  randomNumbers(3);
  pickedColor = pickedColorfunc(2);
  colorDisplay.textContent = pickedColor;
  gameState();
});

document.getElementById("hardButton").addEventListener("click", function () {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  easyMode = false;
  generalMode = false;
  hardMode = true;
  removeDivs();
  addingDivs(6);
  reset();
  randomNumbers(6);
  pickedColor = pickedColorfunc(6);
  colorDisplay.textContent = pickedColor;
  gameState();
});

document.getElementById("container").addEventListener("click", function (event) {
  if (event.target.className == "circles") {
    var clickedColor = event.target.style.backgroundColor;
    if (clickedColor === pickedColor) {
      headerColor.style.backgroundColor = pickedColor;
      gameStatus.textContent = "Correct!";
      changecolor(clickedColor);
      resetButton.textContent = "Play Again?";
    } else {
      gameStatus.textContent = "Try Again!!";
      event.target.style.backgroundColor = "#ffeb3b";
    }
  }
});

document.getElementById("resetButton").addEventListener("click", function () {
  reset();
});

var generalMode = true;
var easyMode = false;
var hardMode = false;

function forReset() {
  if (generalMode === true) {
    return 6;
  } else if (hardMode === true) {
    return 6;
  } else if (easyMode === true) {
    return 3;
  }
}

function reset() {
  headerColor.style.backgroundColor = "#ff6d00";
  colors = randomNumbers(6);
  gameStatus.textContent = "";
  resetButton.textContent = "New Color?";
  pickedColor = pickedColorfunc(forReset());
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
  }
  colorDisplay.textContent = pickedColor;
}

function addingDivs(numbers) {
  container = document.getElementById("container");
  for (var i = 0; i < numbers; i++) {
    var div = document.createElement("div");
    div.classList.add("circles");
    container.appendChild(div);
  }
}

function removeDivs() {
  var container = document.getElementById("container");
  var child = container.querySelectorAll(".circles");
  for (var i = 0; i < child.length; i++) {
    container.removeChild(child[i]);
  }
}

function randomNumberMaker() {
  var r = Math.floor(Math.random() * 255 + 1);
  var g = Math.floor(Math.random() * 255 + 1);
  var b = Math.floor(Math.random() * 255 + 1);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomNumbers(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomNumberMaker());
  }
  return arr;
}

var pickedColor = pickedColorfunc(6);

function pickedColorfunc(number) {
  pickedColor = colors[Math.floor(Math.random() * number)];
  return pickedColor;
}

colorDisplay.textContent = pickedColor;

function gameState() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
  }
}

gameState();

function changecolor(clickedColor) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = pickedColor;
  }
}