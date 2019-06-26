
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

document.getElementById("plus").addEventListener("click", function(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);

  document.getElementById("result").innerHTML = x+y;
});
document.getElementById("minus").addEventListener("click", function(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);

  document.getElementById("result").innerHTML = x-y;
});
document.getElementById("time").addEventListener("click", function(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);

  document.getElementById("result").innerHTML = x*y;
});
document.getElementById("divide").addEventListener("click", function(){
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);

  if(y!=0){
    document.getElementById("result").innerHTML = x/y;
  }
  else{
    document.getElementById("result").innerHTML = "Error, division by zero";

  }
});
