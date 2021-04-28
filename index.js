var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage  = "dice"+randomNumber+ ".png";

var Image1 =document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomImage);


var randomNumber2= Math.floor(Math.random() * 6) + 1;
var randomImage2="dice"+randomNumber2+ ".png";

var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImage2);


if(randomNumber > randomNumber2)
{
  document.querySelector("h1").innerHTML="🎯🚩 Player 1 Win!";

}
else if(randomNumber2 > randomNumber)
{
  document.querySelector("h1").innerHTML=" Player 2 Win! 🎯🚩";
}

else
{
  document.querySelector("h1").innerHTML="⏸Draw! oops❌";
}


