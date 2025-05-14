  var total = 0 // montant de commencement
  var divSec = 0 //Controle le montant de points par seconde par diviser 1000 mms (ou une seconde) par le montant demandé
  var cpstotal = 0 //Cliques par seconde
  let time = null; //Ceci fait que la premiere fois ça ne reinitialise pas l'horloge sur le premier tour (utilisé dans la fonction horloge)
  var cycletut2 = true //Ça controle le cycle du deuxieme tutoriel et va seulement affiché une seule fois

const upgrades = [
  {
    annee: 1,
    prix: 10,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 1,
    mainId: 'prix1',
    montantId: 'numberId1',
  },
  
  {
    annee: 2,
    prix: 100,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 10,
    mainId: 'prix2',
    montantId: 'numberId2',
  },
  
  {
    annee: 3, //Annee scolaire pour le niveau de difficulté
    prix: 1000, //prix de l'amélioration
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 100, //par combien ça change le montant de cliques par secondes
    mainId: 'prix3', //Id pour le prix et les cliques par secondes
    montantId: 'numberId3', //Id pour le montant d'amélioration
  },

  ]


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
  
  locked(upgrades[0].prix, 'box1')
  locked(upgrades[1].prix, 'box2')
  locked(upgrades[2].prix, 'box3')
  tut2()
}
//Cette fonction registre les cliques
function clickCounter() {
  total++
  affiche()
}

  //Cette fonction permet de changer les cliques par seconde
function horloge() {
  //Si 
  if (divSec !== 0) {
    cpstotal = 1000 / divSec;
    if (time !== null) {
      clearInterval(time); 
    }
    time = setInterval(clickCounter, cpstotal); 
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
  
function upgradeSlots (index) { 
  
  const upg = upgrades[index]
  
  if (total >= upg.prix) {
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
      document.getElementById('prt2').style.animationName = 'correct';
      document.getElementById('prt2').style.animationDuration = '1s';
      const audioVrai = new Audio('https://tuteurcliqueur.github.io/correct-156911.mp3');
      audioVrai.play();
      
      divSec += upg.cps;
      total -= upg.prix;
      horloge();
      upg.mult *= 1.5
      upg.prix = parseInt(upg.mult*upg.prix)
      var affichePrix = document.getElementById(upg.mainId);
      affichePrix.innerHTML = 'Année ' + upg.annee + ' (' + upg.cps + ' per sec | cost ' + upg.prix + ')';
      upg.numDe++
      numberOf(upg.montantId, upg.numDe)
    }
      
      else {
      verdic.innerHTML = 'Incorect...';
      answer.innerHTML = 'Answer : ' + egal;
      document.getElementById('prt2').style.animationName = 'incorrect';
      document.getElementById('prt2').style.animationDuration = '1s';
      const audioFaux = new Audio('https://tuteurcliqueur.github.io/wrong-47985.mp3');
      audioFaux.play();
      
      total -= upg.prix;
      affiche();
        }
      }
  }
}
  
