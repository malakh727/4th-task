var numCircles = 6;
var colors = generateRandomColors(numCircles);
var circle = document.querySelectorAll(".circle");
var pickedColor = pickColor();
var rgbCode = document.getElementById("theRGB");
var messageDisplay = document.querySelector("#msg");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numCircles = 3;
  colors = generateRandomColors(numCircles);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < circle.length; i++) {
    if (colors[i]) {
      circle[i].style.background = colors[i];
    } else {
      circle[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numCircles = 6;
  colors = generateRandomColors(numCircles);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < circle.length; i++) {
      circle[i].style.background = colors[i];
      circle[i].style.display = "inline-block";
  }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numCircles);
  //pick a new random color from the array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  rgbCode.textContent = pickedColor;
  this.textContent = "New Color";
  messageDisplay.textContent = "";
  //change colors of circle
  for (var i = 0; i < circle.length; i++) {
    circle[i].style.background = colors[i];
  }
})

rgbCode.textContent = pickedColor;

for(var i = 0; i < circle.length; i++) {
  //add initial colors to circle
  circle[i].style.background = colors[i];
  //add click listeners to circle
  circle[i].addEventListener("click", function() {
    //grab color of picked circle
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Good Job!";
      resetButton.textContent = "Play Again ?";
      changeColors(clickedColor);
    }else{
      this.style.background = "white";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color){
  //loop through all circles
for (var i = 0; i < circle.length; i++) {
    //change each color to match given color
    circle[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  //make and array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
    //get random color and push into array
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}