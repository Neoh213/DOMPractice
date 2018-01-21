var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var h1 = document.querySelector("h1");
var p1BDisplay = document.getElementById("p1Display");
var p2BDisplay = document.getElementById("p2Display");
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
  p1Score++;
  p1Display.textContent = p1Score;

})

p2Button.addEventListener("click", function(){
  p2Score++;
  p2Display.textContent = p2Score;

})
