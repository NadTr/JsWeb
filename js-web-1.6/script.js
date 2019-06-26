// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import images from "./Cat/*.jpg"

let i=1;
let CatId=new Array(12);
while(i<=12){
document.getElementById('chat'+i).src=images["cat"+i];
CatId[i-1]=i;
i++;
}

let shuffleArray=(CatId) =>{
    for (var i=CatId.length-1; i>0;i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = CatId[i];
        CatId[i] = CatId[j];
        CatId[j] = temp;
    }
}

let Randomize=()=>{
shuffleArray(CatId);
  for(i=1;i<=12;i++){
    document.getElementById('chat'+i).src=images["cat"+CatId[i-1]];
  }
}

document.getElementById("Randomize").addEventListener("click",() => Randomize());
