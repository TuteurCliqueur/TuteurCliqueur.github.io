function affiche() {
  var affiche = document.getElementById("counter");
  affiche.innerHTML = total;
}
function horloge() {
  cps = 1000/divSec
  setInterval(parSeconde, cps)
}
function clickCounter() {
  total++
  affiche()
}

function parSeconde() {
    total++
    affiche()
}

function add1() {
  var num1 = Math.random()*10
  var num2 = Math.random()*10
  var reponse = num1+num2
  var reponseUtili = parseInt(prompt("Répond à:"+num1+" + "+num2))
  
  if (total >= 10) {
  divSec++
  total -= 10
  affiche()
  horloge()
    
  }
}

function add10() {
  if (total >= 100) {
  divSec += 10
  total -= 100
  affiche()
  horloge()
    
  }
}

function add100() {
  if (total >= 1000) {
  divSec += 100
  total -= 1000
  affiche()
  horloge()
    
  }


  var nbAnne = 1
  var total = 0
  var divSec = 0
  var cps = 0
