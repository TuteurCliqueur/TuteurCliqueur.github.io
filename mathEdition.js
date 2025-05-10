  var nbAnne = 1
  var total = 0
  var divSec = 0
  var cps = 0
  let time = null;
  var prix = 1

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
  if (total >= (10*prix)) {
  divSec++;
  total -= (10*prix);
  horloge();
  prix += 1.5
  }
  var affiche = document.getElementById("prix10");
  affiche.innerHTML = 'Année 1 (1 per sec | cost ' + (10*prix) + ')';
}

function add10() {
  if (total >= (100*prix)) {
    divSec += 10;
    total -= (100*prix);
    horloge(); 
    prix += 1.5
  }
  var affiche = document.getElementById("prix100");
  affiche.innerHTML = 'Année 2 (10 per sec | cost ' + (100*prix) + ')';
}

function add100() {
  if (total >= (1000*prix)) {
    divSec += 100;
    total -= (1000*prix);
    horloge(); 
    prix += 1.5
  }
  var affiche = document.getElementById("prix1000");
  affiche.innerHTML = 'Année 3 (100 per sec | cost ' + (1000*prix) + ')';
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


