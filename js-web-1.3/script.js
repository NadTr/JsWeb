
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
"use strict"
//Reset" erase the value of all the form elements to allow re-entering everything.
let Reset=()=>{
  document.getElementById("name").value = "";
  document.getElementById("power").value = "";
  document.getElementById("motivation").value = "";
  document.getElementById("plan").value = "";


}

//"Display" erase the whole form and the buttons from the screen and display a text with headers showing the result collected in the previous form.
let Display=()=>{
  var Intro="<h1>Super Vilain Application Form </h1><h2>Summary</h2>";
  var n="<p><B>My name: </B>";
  var name = document.getElementById("name").value;
  var p=" </p><p> <B>My super power(s): </B> ";
  var power = document.getElementById("power").value;
  var m=".</p><p> <B>My motivation(s): </B> ";
  var motivation = document.getElementById("motivation").value;
  var pl=" </p><p> <B>My evil plan to conquer the whole world: </B> ";
  var plan = document.getElementById("plan").value;
  var end="</p> <h3>We will contact you soon...</h3>"

  var text= Intro+n+name+p+power+m+motivation+pl+plan+end;

  document.getElementById("wrapper").innerHTML = text;

}

document.getElementById("Reset").addEventListener("click",() => Reset());
document.getElementById("Display").addEventListener("click",() => Display());
