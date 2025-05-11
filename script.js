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
  var num10 = 0
  var num100 = 0
  var num1000 = 0

function numberOf(elementId, valeur) {
  var Id = document.getElementById(elementId);
  Id.innerHTML = valeur;
}

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
  locked(prix10, 'box10')
  locked(prix100, 'box100')
  locked(prix1000, 'box1000')
}

function add1() {
    divSec++;
    total -= prix10;
    horloge();
    mult10 *= 1.5
    prix10 = parseInt(mult10*10)
    var affiche = document.getElementById('prix10');
    affiche.innerHTML = 'Année 1 (1 per sec | cost ' + prix10 + ')';
    num10++
    numberOf('numberId1', num10)
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
    num100++
    numberOf('numberId2', num100)
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
  num1000++
  numberOf('numberId3', num1000)
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

var calc = document.getElementById('calc')

    calc.addEventListener('click', function(event) {

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = '+1';

    popup.style.left = `${event.pageX}px`;
    popup.style.top = `${event.pageY}px`;

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 2000);
  });
  
function alertV2 (addFunc) {
 if (total >= prix10) { 
  document.getElementById('prt1').style.display = 'block'
  document.getElementById('blurJS').style.display = 'block'
  
  
  
  var num1 = parseInt(Math.random()*10)
  var num2 = parseInt(Math.random()*10)
  var egal = num1 + num2
  var verdic = document.getElementById('verdic')
  var question = document.getElementById('question')
  var answer = document.getElementById('answer')
  question.innerHTML = num1 + ' + ' + num2 + ' = ?'
  
  document.getElementById("verify").onclick = function () {
    
    var userAnswer = document.getElementById('userAnswer').value;
    document.getElementById('prt2').style.display = 'block';
    document.getElementById('prt1').style.display = 'none';

    if (userAnswer == egal) {
      verdic.innerHTML = 'Correct!';
      answer.innerHTML = 'Answer : ' + egal;
      addFunc();
      } 
      
      else {
      verdic.innerHTML = 'Incorect...';
      answer.innerHTML = 'Answer : ' + egal;
      }
  }
 }
}
  

