  var nbAnne = 1
  var total = 0
  var divSec = 0
  var cps = 0
  let time = null;
  var mult10 = 1
  var mult100 = 1
  var mult1000 = 1
  var prix10 = 10
  var prix100 = 100
  var prix1000 = 1000

function locked (prixIntial, id) {

if (total < prixIntial) {
  document.getElementById(id).style.backgroundColor = "#444444";
  }
  
else if (total >= prixIntial) {
document.getElementById(id).style.backgroundColor = "#FFFFFF";
  }
}

function affiche() {
  var affiche = document.getElementById("counter");
  affiche.innerHTML = total;
  
  var affiche2 = document.getElementById("counterPar");
  affiche2.innerHTML = divSec + ' cliques par seconde';
}

function clickCounter() {
  total++
  affiche()
  locked(prix10, 'prix10')
  locked(prix100, 'prix100')
  locked(prix1000, 'prix1000')
}

function add1() {
  if (total >= prix10) {
  divSec++;
  total -= prix10;
  horloge();
  mult10 *= 1.5
  prix10 = parseInt(mult10*10)
  var affiche = document.getElementById('prix10');
  affiche.innerHTML = 'Année 1 (1 per sec | cost ' + prix10 + ')';
  } 
}

function add10() {
  if (total >= prix100) {
  divSec += 10;
  total -= prix100;
  horloge();
  mult100 *= 1.5
  prix100 = parseInt(mult100*100)
  var affiche = document.getElementById('prix100');
  affiche.innerHTML = 'Année 2 (10 per sec | cost ' + prix100 + ')';
  } 
}

function add100() {
  if (total >= prix1000) {
  divSec += 100;
  total -= prix1000;
  horloge();
  mult1000 *= 1.5
  prix1000 = parseInt(mult1000*1000)
  var affiche = document.getElementById('prix1000');
  affiche.innerHTML = 'Année 3 (100 per sec | cost ' + prix1000 + ')';
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
