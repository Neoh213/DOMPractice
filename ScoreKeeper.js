var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p1BDisplay = document.getElementById("p1Display");
var p2BDisplay = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var paragraph = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
  if(!gameover){


  p1Score++;
  if(p1Score === winningScore)
  {
    gameover = true;
    p1Display.classList.add("winner");
  }
  p1Display.textContent = p1Score;
}
});

p2Button.addEventListener("click", function(){
  if(!gameover){


  p2Score++;
  if(p2Score === winningScore)
  {
    gameover = true;
    p2Display.classList.add("winner");
  }
  p2Display.textContent = p2Score;
}

});

resetButton.addEventListener("click", function(){
reset();
});


numInput.addEventListener("change",function(){

winningScore = Number(numInput.value);
winningScoreDisplay.textContent = numInput.value;
reset();
});

function reset(){
  p1Score = 0;
  p2Score =0;
  p1Display.textContent = p2Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameover = false;
}
