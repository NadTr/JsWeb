
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

"use strict";

//click on any of these buttons it should change the color
document.getElementById("red").addEventListener("click", function(){
  document.getElementById("case").style.backgroundColor = "red";
});
document.getElementById("blue").addEventListener("click", function(){
document.getElementById("case").style.backgroundColor = "blue";
});
document.getElementById("green").addEventListener("click", function(){
  document.getElementById("case").style.backgroundColor = "green";
});
