  var nbAnne = 1
  var total = 0
  var divSec = 0
  var cps = 0
  let time = null;
  var mult = 1
  var prix = 10

function locked () { 
  
  if (total < prix) {
  document.getElementById('prix10').style.backgroundColor = "#444444";
  }
  
  else if (total >= prix) {
  document.getElementById('prix10').style.backgroundColor = "#FFFFFF";
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
  locked()
}

function add(intialPrice, cps, year, idElement) {
  prix = parseInt(mult*intialPrice)
  if (total >= prix) {
  divSec++;
  total -= prix;
  horloge();
  mult *= 1.3
  prix = parseInt(mult*prix)
  } 
  var affiche = document.getElementById(idElement);
  affiche.innerHTML = 'Année ' + year + ' (' + cps + 'per sec | cost ' + prix + ')';
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

