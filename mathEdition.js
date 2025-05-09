
function clickCounter() {
  total++
  var affiche = document.getElementById("counter");
  affiche.innerHTML = total;
  if (total == 100) {
  alert('yay')
}
}

function parSeconde() {
    total++
    var affiche = document.getElementById("counter");
  affiche.innerHTML = total;
}

function add1() {
  divSec++
}

function add10() {
  divSec += 10
}

function add100() {
  divSec += 100
}
  var nbAnne = 1
  var total = 0
 var divSec = 0
 var cps = 0
 
if (0 < divSec ) {
  cps = 1000/divSec
  setInterval(parSeconde, cps)
}






