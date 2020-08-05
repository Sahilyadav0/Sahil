var randomNumber1=Math.floor((Math.random()*6)+1);
var imgName1="Images/dice"+randomNumber1+".png";

var randomNumber2=Math.floor((Math.random()*6)+1);
var imgName2="Images/dice"+randomNumber2+".png";

document.querySelector(".dice .img1").setAttribute("src", imgName1);
document.querySelector(".dice .img2").setAttribute("src", imgName2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="⛳Player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 wins⛳";
}
else{
  document.querySelector("h1").textContent="Draw";
}
