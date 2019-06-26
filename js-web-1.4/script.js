
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";
"use strict"

/*
  Put the JavaScript code you want below.
*/
let selectY = document.getElementById("year");
let selectM=document.getElementById("month");
let selectD=document.getElementById("day");
let today=new Date();
let todayD = today.getDate();
let todayM = today.getMonth() + 1; //January is 0!
let todayY = today.getFullYear();

//Calcule l'age de la personne en fonction de la date d'aujourd'hui
let CalculAge=(day,month,year)=>{
    if (todayM>month){
     return todayY-year;
   }
  else if(todayM==month){
    if (todayD>day){
      return todayY-year;
    }
    else if (todayD==day){
        return todayY-year+"<h3> I'ts your birthday, </h3><h1>  Happy Birthday!!</h1>";
        //document.getElementById("text").innerHTML =
      }
    else{
      return todayY-year-1;
    }
  }
  else{
    return todayY-year-1;
  }
}

//retourne l'age dans le document html
function Agecalculator() {
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  document.getElementById("result").innerHTML = CalculAge(day,month,year);
}
//Rempli les selects

for (let i=1901;i<=todayY;i++){
  let opt=document.createElement("option");
  opt.value=i;
  opt.text=i;
  selectY.add(opt, selectY[0]);
}

for (let i=1;i<=12;i++){
  let opt=document.createElement("option");
  opt.value=i;
  opt.text=i;
  selectM.add(opt, selectM[0]);
}

let mm;
let yy;
let bis;
//
function generateDays(last) {
  for (let i=1;i<=last;i++){
    let opt=document.createElement("option");
    opt.value=i;
    opt.text=i;
    selectD.add(opt, selectD[0]);
  }
}
function february() {
  if (bis===0){
    generateDays(29);
  }
else{
  generateDays(28);
}
}
function Days() {
  selectD.innerHTML="";
  switch (mm) {
    case 2:
      february();
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      generateDays(30);
      break;

    default:
      generateDays(31);
      break;
    }
}
//Affiche l'age
selectY.addEventListener("change", () => {
  Agecalculator();
  yy = parseInt(document.getElementById("year").value);
  bis=(yy-1900)%4;
  Days();

});


selectM.addEventListener('change', ()=>{
  Agecalculator();
  mm=parseInt(document.getElementById("month").value);
  Days();

});
selectD.addEventListener('change', ()=>{
  Agecalculator();
});
