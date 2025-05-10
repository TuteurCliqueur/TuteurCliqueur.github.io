  var nbAnne = 1
  var total = 0
  var divSec = 0
  var cps = 0
  let time = null;
  var mult = 1
  var prix = null

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
  prix = mult*10
  if (total >= prix) {
  divSec++;
  total -= prix;
  horloge();
  mult *= 1.5
  }
  var affiche = document.getElementById("prix10");
  affiche.innerHTML = 'Année 1 (1 per sec | cost ' + prix + ')';
}

function add10() {
  prix = mult*100
  if (total >= prix) {
    divSec += 10;
    total -= prix;
    horloge(); 
    mult *= 1.5
  }
  var affiche = document.getElementById("prix100");
  affiche.innerHTML = 'Année 2 (10 per sec | cost ' + prix + ')';
}

function add100() {
 prix = mult*1000
  if (total >= prix) {
    divSec += 100;
    total -= prix;
    horloge(); 
    mult *= 1.5
  }
  var affiche = document.getElementById("prix1000");
  affiche.innerHTML = 'Année 2 (10 per sec | cost ' + prix + ')';
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


