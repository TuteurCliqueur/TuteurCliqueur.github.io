  var total = 0 // montant de commencement
  var divSec = 0 //Controle le montant de points par seconde par diviser 1000 mms (ou une seconde) par le montant demandé
  var cps = 0 //Cliques par seconde
  let time = null; //Ceci fait que la premiere fois ça ne reinitialise pas l'horloge sur le premier tour (utilisé dans la fonction horloge)
  var mult10 = 1 //
  var mult100 = 1
  var mult1000 = 1
  var prix10 = 10
  var prix100 = 100
  var prix1000 = 1000
  var num10 = 0
  var num100 = 0
  var num1000 = 0
  var cycletut2 = true //Ça controle le cycle du deuxieme tutoriel et va seulement affiché une seule fois

//Ceci affiche le deuxieme tutoriel
function tut2 () {
  //Si total est plus grand ou égal à 10 est cycletut2 est vrai, affiche le deuxieme tutoriel et remets cycletut2 à faux
  if ((total >= 10) && cycletut2) {
  document.getElementById('tut2').style.display = 'block' 
  document.getElementById('blurJS').style.display = 'block'
  cycletut2 = false
  }
}
//Controle le nombre d'améliorations
function numberOf(elementId, valeur) {
  var Id = document.getElementById(elementId);
  Id.innerHTML = valeur;
}
//Cette fonction fait en sorte que les améliorations sont blockés
function locked (prixIntial, id) {
//Si le total est moins que le prix initial de l'amélioration, c'est bloqué
if (total < prixIntial) {
  document.getElementById(id).style.backgroundColor = "#444444";
  document.getElementById(id).style.cursor = "not-allowed";
  }
//Ou si le total est plus grand ou égal au prix initiale
else if (total >= prixIntial) {
  document.getElementById(id).style.backgroundColor = "#FFFFFF";
  document.getElementById(id).style.cursor = "pointer";
  }
}
//Affiche le tout pour la page mathEdition
function affiche() {
  var affiche = document.getElementById("counter");
  affiche.innerHTML = total;
  
  var affiche2 = document.getElementById("counterPar");
  affiche2.innerHTML = divSec + ' cliques par seconde';
  
  locked(prix10, 'box10')
  locked(prix100, 'box100')
  locked(prix1000, 'box1000')
  tut2()
}
//Cette fonction registre les cliques
function clickCounter() {
  total++
  affiche()
}
//
function add1(verdic) {
  if ((total >= prix10) && verdic) {
    divSec++;
    total -= prix10;
    horloge();
    mult10 *= 1.5
    prix10 = parseInt(mult10*10)
    var affichePrix = document.getElementById('prix10');
    affichePrix.innerHTML = 'Année 1 (1 per sec | cost ' + prix10 + ')';
    num10++
    numberOf('numberId1', num10)
  }
  else {
    total -= prix10;
    affiche();
  }
}

function add10(verdic) {
  if ((total >= prix100) && verdic) {
    divSec += 10;
    total -= prix100;
    horloge();
    mult100 *= 1.5
    prix100 = parseInt(mult100*100)
    var affichePrix = document.getElementById('prix100');
    affichePrix.innerHTML = 'Année 2 (10 per sec | cost ' + prix100 + ')';
    num100++
    numberOf('numberId2', num100)
  }
  else {
    total -= prix100;
    affiche();
  }
}

function add100(verdic) {
  if ((total >= prix1000) && verdic) {
    divSec += 100;
    total -= prix1000;
    horloge();
    mult1000 *= 1.5
    prix1000 = parseInt(mult1000*1000)
    var affichePrix = document.getElementById('prix1000');
    affichePrix.innerHTML = 'Année 3 (100 per sec | cost ' + prix1000 + ')';
    num1000++
    numberOf('numberId3', num1000)
  }
  else {
    total -= prix1000;
    affiche();
  }
}
  //Cette fonction permet de changer les cliques par seconde
function horloge() {
  //Si 
  
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
      addFunc(true);
      document.getElementById('prt2').style.animationName = 'correct';
      document.getElementById('prt2').style.animationDuration = '1s';
      const audioVrai = new Audio('https://tuteurcliqueur.github.io/correct-156911.mp3');
      audioVrai.play();
      } 
      
      else {
      verdic.innerHTML = 'Incorect...';
      answer.innerHTML = 'Answer : ' + egal;
      addFunc(false);
      document.getElementById('prt2').style.animationName = 'incorrect';
      document.getElementById('prt2').style.animationDuration = '1s';
      const audioFaux = new Audio('https://tuteurcliqueur.github.io/wrong-47985.mp3');
      audioFaux.play();
      }
 }
}
  
