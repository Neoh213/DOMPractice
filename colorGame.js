var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
//mode event listeners
setupModeButtons();
setupSquares();
  reset();
}

function setupSquares(){

  for(var i = 0; i<squares.length; i++)
  {

    //add click listenters to squares
    squares[i].addEventListener("click",function(){
      //graph color clicked squares
  var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor)
      {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
        console.log(clickedColor);
        console.log(pickedColor);
      }
    });
  }
}

function setupModeButtons(){
  for(var i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent ==="Easy"){
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();

    });
  }
}

function reset(){
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
   pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent= pickedColor;
  resetButton.textContent = "New Colors";

  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";

}



resetButton.addEventListener("click", function(){
reset();


})


function changeColors(color){
//loop through all squares
for(var i = 0; i<squares.length; i++)
{
  //change each color to match given color
  squares[i].style.backgroundColor = color;
}
}

function pickColor(){
var random =  Math.floor(Math.random() * colors.length);
return colors[random];

}

function generateRandomColors(num)
{
//make an array
var arr = [];
//re peat num times
for(var i = 0; i<num; i++)
{
  //add random colors and push to array
  arr.push(randomColor());


}
//return that array
return arr;
}

function randomColor()
{
  //pick a red from blue and green
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
