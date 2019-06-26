
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let i=0;
let InsArr= new Array(25);
InsArr[0]="Bande-toi les yeux et vas courir très vite dans la foret!!";
InsArr[1]="Faits la mise à jour de ton cerveau...";
InsArr[2]="Va jouer à colin maillard sur l'autoroute!";
InsArr[3]="Mets tes doigts dans une prise, pour voir si ton cerveau s'allume. ";
InsArr[4]="Tricote-toi des moufles avec du fil barbelé ";
InsArr[5]="Va jouer à la marelle dans un champ de mine!! ";
InsArr[6]="Va jouer à cache-cache dans une chambre froide. ";
InsArr[7]="Déguise-toi en bûche et allume un feu!";
InsArr[8]="Sèche-toi les cheveux avec un chalumeau !";
InsArr[9]="Mets une barquette en aluminium au micro-onde et reste devant pour regarder.";
InsArr[10]="Bois une tisane au cyanure...";
InsArr[11]="Fais un bain de bouche à l'eau de javel.";
InsArr[12]="Escalade le Kilimanjaro en tongs...";
InsArr[13]="Mets ton cerveau au lave-vaisselle, pour le décrasser!";
InsArr[14]="Va enfiler un leggins au bord d'une falaise.";
InsArr[15]="Va donc piquer une tête dans la piscine d'une centrale nucléaire!";
InsArr[16]="Va jouer au cerf-volant sous une ligne à haute tension.";
InsArr[17]="Va faire la sieste sur les rails du métro";
InsArr[18]="Va donc passer l’aspirateur sur la plage!";
InsArr[19]="Compte les décimales de Pi en partant de la fin";
InsArr[20]="Peut-être que ton cerveau existe dans la taille d'au dessus?";
InsArr[21]="Joue aux cymbales avec un défibrillateur.";
InsArr[22]="";
InsArr[23]="";
InsArr[24]="";
InsArr[25]="";
function Random(){
  return parseInt(100*Math.random());
}

function Insult(){
  let n=parseInt(25*Math.random());
  document.getElementById("insult").innerHTML =InsArr[n];
  document.getElementById("Troll").value="Encore raté";

}


document.getElementById("Troll").addEventListener("mouseover",() => Move());


 function Move(){
    // met en surbrillance la cible de mouseover
    let a=Random();
    let b=Random();
    event.target.style.top =  a+"%";
    event.target.style.left =  b+"%";

    if(i>3){
      Insult()
      i++
    }
    else{
      i++
    }

  }
