  var nbAnne = 1
  var total = 0
  var divSec = 0
  var cps = 0
  let time = null;

function affiche() {
  var affiche = document.getElementById("counter");
  affiche.innerHTML = total;
  var affiche2 = document.getElementById("counterPar");
  affiche2.innerHTML = divSec + ' cliques par seconde';
}

function clickCounter() {
  total++
  affiche()
}

function add1() {
  if (total >= 10) {
  divSec++;
  total -= 10;
  horloge();
  }
}

function add10() {
  if (total >= 100) {
    divSec += 10;
    total -= 100;
    horloge(); 
  }
}

function add100() {
  if (total >= 1000) {
    divSec += 100;
    total -= 1000;
    horloge(); 
  }
}
  
function horloge() {
  if (divSec !== 0) {
    cps = 1000 / divSec;

    if (time !== null) {
      clearInterval(time); 
    }

    time = setInterval(clickCounter, cps); 
  }
}


