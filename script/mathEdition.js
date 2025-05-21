var total = 0 // montant de commencement
  var divSec = 0 //Controle le montant de points par seconde par diviser 1000 mms (ou une seconde) par le montant demandé
  var cpstotal = 0 //Cliques par seconde
  let time = null; //Ceci fait que la premiere fois ça ne reinitialise pas l'horloge sur le premier tour (utilisé dans la fonction horloge)
  var cycletut2 = true //Ça controle le cycle du deuxieme tutoriel et va seulement affiché une seule fois
  var cpc = 1
  let tempAvant = performance.now();

requestAnimationFrame(horloge); // met l'animation de la fonction horloge en boucle, https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame

const upgrades = [
  {
    annee: 1, // Année scolaire 
    prix: 10, // Prix de cette mise à niveau
    mult: 1, // Multiplicateur (non utilisé pour le moment, toujours à 1)
    numDe: 0, // Nombre de dés (actuellement toujours à 0)
    cps: 1, // Nombre de points générés par seconde
    mainId: 'prix1', // ID HTML utilisé pour afficher le prix
    montantId: 'numberId1', // ID HTML utilisé pour afficher la quantité achetée
    numOf: 2, // Nombre de valeurs dans l'équation générée
    range: 10, // Intervalle de valeurs possibles pour les nombres
    opertbl: [' + '], // Liste des opérateurs mathématiques utilisés
    inconnue: false, // Indique s'il y a une inconnue à résoudre
  },
  
  {
    annee: 2,
    prix: 100,
    mult: 1, 
    numDe: 0, 
    cps: 10,
    mainId: 'prix2',
    montantId: 'numberId2',
    numOf: 2,
    range: 20,
    opertbl: [' - '], 
    inconnue: true,
  },
  
  {
    annee: 3,
    prix: 1000,
    mult: 1, 
    numDe: 0, 
    cps: 100,
    mainId: 'prix3',
    montantId: 'numberId3',
    numOf: 4,
    range: 10,
    opertbl: [' + ', ' - '], 
    inconnue: true,
  },
  
  {
    annee: 4,
    prix: 10000,
    mult: 1, 
    numDe: 0, 
    cps: 500,
    mainId: 'prix4',
    montantId: 'numberId4',
    numOf: 2,
    range: 10,
    opertbl: [' * '], 
    inconnue: true,
  },  
  
  {
    annee: 5,
    prix: 50000,
    mult: 1, 
    numDe: 0, 
    cps: 1000,
    mainId: 'prix5',
    montantId: 'numberId5',
    numOf: 2,
    range: 15,
    opertbl: [' / '], 
    inconnue: true,
  },
    
  {
    annee: 6,
    prix: 100000,
    mult: 1, 
    numDe: 0, 
    cps: 1750,
    mainId: 'prix6',
    montantId: 'numberId6',
    numOf: 4,
    range: 50,
    opertbl: [' / ', ' * '], 
    inconnue: true,
  },
    
  {
    annee: 7,
    prix: 175000,
    mult: 1, 
    numDe: 0, 
    cps: 2250,
    mainId: 'prix7',
    montantId: 'numberId7',
    numOf: 2, //Doit etre deux parceque c'est un rectangle
    range: 75,
    opertbl: [' + ', ' * '], 
    inconnue: true,
  },
    
  {
    annee: 8,
    prix: 300000,
    mult: 1, 
    numDe: 0, 
    cps: 2750,
    mainId: 'prix8',
    montantId: 'numberId8',
    numOf: 4,
    range: 5,
    opertbl: [' √ ', ' ** '], //la racine carrée doit apparaître en premier dans la liste
    inconnue: true,
  },
    
  {
    annee: 9,
    prix: 450000,
    mult: 1, 
    numDe: 0, 
    cps: 4000,
    mainId: 'prix9',
    montantId: 'numberId9',
    numOf: 2, 
    range: 300,
    opertbl: [' + ', ' * '], 
    inconnue: true,
  },
    
  {
    annee: 10,
    prix: 650000,
    mult: 1, 
    numDe: 0, 
    cps: 6000,
    mainId: 'prix10',
    montantId: 'numberId10',
    numOf: 2, 
    range: 300,
    opertbl: ['sin', 'cos', 'tan'], 
    inconnue: true,
  },
    
  {
    annee: 11,
    prix: 1000000,
    mult: 1, 
    numDe: 0, 
    cps: 10000,
    mainId: 'prix11',
    montantId: 'numberId11',
    opertbl: ['sin', 'cos'], 
    inconnue: true,
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
function locked (prixIntial, id, index, prixtext) {
  
let upg = upgrades[index]
  
if (upg.inconnue) {
  document.getElementById(id).className = "boxClass1";
  document.getElementById(prixtext).style = "visibility: hidden;" //je utilise 'visibility', parce que je veux que le texte ait toujours un impact sur la présentation de la boîte.
}

if ((total >= prixIntial) && upg.inconnue) {
  upg.inconnue = false
  document.getElementById(prixtext).style = "visibility: visible;"
  document.getElementById(id).classList.remove('boxClass1');
  cpc *= 4
}

if (!upg.inconnue) {
if (total < prixIntial) {
  document.getElementById(id).style.backgroundColor = "#444444";
  document.getElementById(id).style.cursor = "not-allowed";
  }
//Ou si le total est plus grand ou égal au prix initiale
else if (total >= prixIntial) {
  document.getElementById(id).style.backgroundColor = "#ffffff";
  document.getElementById(id).style.cursor = "pointer";
  }
 }
}
//Affiche le tout pour la page mathEdition
function affiche() {
  var affiche = document.getElementById("counter");
  affiche.innerHTML = Math.round(total);
  
  var affiche2 = document.getElementById("counterPar");
  affiche2.innerHTML = divSec + ' cliques par seconde';
  
  for (let i = 0; i <= (upgrades.length - 1); i++) {
    
    let box = ('box' + (i + 1)).toString()
    let prix = ('prix' + (i + 1)).toString()
    
    locked(upgrades[i].prix, box, i, prix)
  }
  
  tut2()
}
//Cette fonction registre les cliques
function clickCounter() {
  total += cpc
  affiche()
}

  //Cette fonction permet de changer les cliques par seconde
function horloge(tempIntial) {
  const deltaTemp = (tempIntial - tempAvant) / 1000; // in seconds
  tempAvant = tempIntial;

  // CPS calculation based on delta time
  if (divSec > 0) {
    total += divSec * deltaTemp;
  }

  affiche(); // mise a jour des visuels
  requestAnimationFrame(horloge);
}
// On récupère l'élément HTML avec l'ID 'calc' (bouton de calcul)
var calc = document.getElementById('calc')

    calc.addEventListener('click', function(event) {
 // On crée une boîte popup pour afficher le gain de clic
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = '+' + cpc;

    popup.style.left = `${event.pageX}px`;
    popup.style.top = `${event.pageY}px`;

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 2000);
  });
  // Fonction qui retourne dans quel quadrant on se trouve selon l’angle et la fonction trigonométrique utilisée
  function trouveMarge (egalPara, ratio) {
    
    let quadrant = ''
    let quadrantText = ' si on est dans la quadrant '
    
    if (0 < egalPara  && egalPara < 90) {
          quadrant = quadrantText + '1'
          }
          
          if (90 < egalPara  && egalPara < 180) {
          quadrant = quadrantText + '2'
          }
          
          if (180 < egalPara  && egalPara < 270) {
          quadrant = quadrantText + '3'
          }
          
          if (270 < egalPara  && egalPara < 360) {
          quadrant = quadrantText + '4'
          }
          
  // Cas particuliers pour les angles clés avec sinus ou cosinus
          if (egalPara == 0 && ratio == 'sin') {
              quadrant = ' si : -90 < θ < 90'
          }
          
          if (egalPara == 90 && ratio == 'cos') {
            quadrant = ' si : 0 < θ < 180'
          }
      
      return quadrant
  }
// Fonction qui génère une équation et affiche l’interface de résolution
function upgradeSlots (index) { 
  
  const upg = upgrades[index] // On sélectionne l’objet correspondant à l’année
  var qType = document.getElementById('type')
  qType.innerHTML = 'Effectué cette équation'
  
  if (total >= upg.prix) {
    // On montre la boîte de question
  document.getElementById('prt1').style.display = 'block'
  document.getElementById('blurJS').style.display = 'block'
  document.getElementById('theta').style.display = 'none'
  var verdic = document.getElementById('verdic')
  var question = document.getElementById('question')
  var answer = document.getElementById('answer')
  var haut = document.getElementById('hauteur')
  var hypo = document.getElementById('hypotenuse')
  var long = document.getElementById('longeur')
  var thet = document.getElementById('theta')
  var questionVar = ''
  var dispQuestionVar = ''
  var egal = null
  hypo.innerHTML = ''
  // Cas pour les rectangles (années 7 et 9)
  if (index == 6 || index == 8) {
    operand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length))]
    num1 = parseInt(Math.random() * upg.range) + 1
    num2 = parseInt(Math.random() * upg.range) + 1
    
    if (operand.includes('+')) {
    qType.innerHTML = 'Trouve le périmetre'
    egal = (num1 + num2)*2
    }
    
    else {
    qType.innerHTML = "Trouve l'aire"
    egal = num1 * num2
    }
    
    document.getElementById('question').style.display = 'none'
    document.getElementById('grRectId').style.display = 'grid'
    document.getElementById('forme').className = 'rect'
    
    long.innerHTML = num2
    haut.innerHTML = num1
  }
  
    // Cas pour la trigonométrie (année 10)
  else if (index == 10) {
    
  
    
    const trigTbl = ['1/2', '1', '0', '√3/2', '√2/2']
    let operand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length))]
    let dispCercleUnit = trigTbl[parseInt(Math.random() * (trigTbl.length))]
    let signChoisi = Math.random()
    let sign = ''
    let cercleUnit = null
    let quadChoisi = Math.random()
    
    
    if ((signChoisi <= 0.5) && !(dispCercleUnit == '0')) { //Pourque sa ajoute pas une signe négatif quand c'est 0
      sign = '-'
    }

   dispCercleUnit = sign + dispCercleUnit
   cercleUnit = dispCercleUnit
    // Si la valeur contient une racine, on la convertit pour l'évaluer avec `eval()`
     if (dispCercleUnit.includes('√')) {
      cercleUnit = dispCercleUnit.replace(/√(\d+)/g, "Math.sqrt($1)") 
     }

      // Cas pour le cosinus : on trouve l’angle correspondant
    if (operand.includes('cos')) {
      
      egal = Math.acos(eval(cercleUnit))
      egal = Math.round(egal * (180 / Math.PI)) 
      
          /*Javascript n'est pas exact avec ses calculs, donc j'utilise toFixed 
          car je veux arrondir (defaut est 0). C'est aussi en Radian donc je dois faire * 
          (180 / Math.PI) pour la conversion. */
  
          if (Math.abs(egal) != egal) { // si c'est pas positive Ex: -30 degree, on veut que c'est 0 < angle < 360.
          egal = 360 + egal // ajoute la nombre négatif (c'est moin de toute façon.)
          }
            
        dispQuestionVar = 'Cosinus de quel angle égal à ' + dispCercleUnit + trouveMarge(egal, 'cos')
      
    }
    // Cas pour le sinus : on cherche l’angle dont le sinus donne une certaine valeur
    if (operand.includes('sin')) {
      egal = Math.asin(eval(cercleUnit))
      egal = Math.round(egal * (180 / Math.PI))
      // Si l’angle est négatif, on l’ajuste pour l’exprimer entre 0 et 360
      if (Math.abs(egal) != egal) {
            egal = 360 + egal
          }
       // On affiche une question du type : "Sinus de quel angle égal à ..."
      dispQuestionVar = 'Sinus de quel angle égal à ' + dispCercleUnit + trouveMarge(egal, 'sin')
      
    }
    document.getElementById('question').style.display = 'block';
    question.innerHTML = dispQuestionVar
  }
  // Cas pour l’année 9: trigonométrie avec triangle rectangle
  else if (index == 9) {
  operand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length))];
  num1 = parseInt(Math.random() * upg.range) + 1;
  num2 = parseInt(Math.random() * 60) + 1;  // Angle en degrees
  
  thet.innerHTML = 'θ = ' + num2 + '°';

  // On convertit l’angle en radians (nécessaire pour les fonctions trigonométriques en JavaScript)
  var num2InRadians = num2 * (Math.PI / 180);

  if (operand.includes('cos')) {
    hypo.innerHTML = num1;
    haut.innerHTML = '?';
    egal = (Math.cos(num2InRadians)) * num1;
  } 
  else if (operand.includes('sin')) {
    hypo.innerHTML = num1;
    long.innerHTML = '?';
    egal = (Math.sin(num2InRadians)) * num1;
  } 
  else {
    let i = Math.random();

    if (i <= 0.5) {
      haut.innerHTML = num1;
      long.innerHTML = '?';
      egal = (Math.tan(num2InRadians)) * num1;
    } 
    else {
      long.innerHTML = num1;
      haut.innerHTML = '?';
      egal = num1 / Math.tan(num2InRadians);
    }
  }

  egal = egal.toFixed(2)
  
  document.getElementById('question').style.display = 'none';
  document.getElementById('grRectId').style.display = 'grid';
  document.getElementById('theta').style.display = 'block';
  document.getElementById('forme').className = 'tri';
}
  else {
    // Cas pour les autres niveaux où on pose une équation simple (ex. carré, racine, etc.)
    document.getElementById('question').style.display = 'block'
    document.getElementById('grRectId').style.display = 'none'
    //Voici la boucle pour la verificaiton de racine carre
  for (let i = 0; i < upg.numOf; i++) {
    
    ranOperand = ''
    number = parseInt(Math.random() * upg.range) + 1
    operand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length))]

    // Si l’opération est une racine, on élève au carré pour avoir un entier parfait
      if (operand.includes('√')) {
      number **= 2;
      questionVar += '√' + number.toString();
      
      if (i != (upg.numOf - 1)) {
        ranOperand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length - 1) + 1)]; 
        questionVar += ranOperand;
        /* Quand c'est un raccine carré, il doit avoir une autre operand 
        apres donc, ceci pige une autre operand autre que le premier du 
        'array' (ou le raccine carré dans cette cas*) */
        }
      } 

    else {
      questionVar += number.toString();
      if (i != (upg.numOf - 1)) {
      questionVar += operand;
      }
    }
    
    if ((operand.includes('**') || ranOperand.includes('**')) && (i != (upg.numOf - 1))) {
      questionVar += parseInt(Math.random() * upg.range) + 1;
      questionVar += ' + '
    }
  }
  dispQuestionVar = questionVar

  if (questionVar.includes('√')) {
    
    questionVar = questionVar.replace(/√(\d+)/g, "Math.sqrt($1)") 
    
    /* 'g' est pour global, pour changer tous les '√'. 
    \d+ veut dire les chiffres apres le '√' et le '$1' 
    appelle la groupe que j'ai crée avant la virgule. 
    Ceci vas en bref, prendre un equation comme '5 + √5' 
    et changer pour l'ordi à '5 + Math.sqrt(5)' */
    
  }
  question.innerHTML = dispQuestionVar
  egal = eval(questionVar)

  }

}
//Gestion des erreurs si l'utilisateur n’a pas assez de points ou si l’amélioration est bloquée
else {
  if (upg.inconnue){
    alert("Cette année est encore inconnue !")
  }
  else {
    alert("Vous n'avez pas assez de points pour acheter cette améliorations!")
  }
}

  document.getElementById("verify").onclick = function () {

    var userAnswer = document.getElementById('userAnswer').value;
      // Vérifie que l'entrée est un nombre et ne contient pas d’espace
    if (userAnswer == Number(userAnswer) && !(userAnswer.includes(' '))) {
    
    document.getElementById('grRectId').style.display = 'none';
    document.getElementById('prt2').style.display = 'block';
    document.getElementById('prt1').style.display = 'none';
    long.innerHTML = ''
    haut.innerHTML = ''
    hypo.innerHTML = ''
//Si la réponse est correcte
    if (userAnswer == egal) {
      verdic.innerHTML = 'Correct!';
      answer.innerHTML = 'Answer : ' + egal;
      document.getElementById('prt2').style.animationName = 'correct';
      document.getElementById('prt2').style.animationDuration = '1s';
      const audioVrai = new Audio('https://tuteurcliqueur.github.io/sons/correct-156911.mp3');
      audioVrai.play();
      
      divSec += upg.cps;
      total -= upg.prix;
      upg.mult *= 1.5
      upg.prix = parseInt(upg.mult*upg.prix)
      var affichePrix = document.getElementById(upg.mainId);
      affichePrix.innerHTML = 'Année ' + upg.annee + ' (' + upg.cps + ' per sec | cost ' + upg.prix + ')';
      upg.numDe++
      numberOf(upg.montantId, upg.numDe)
    }
      //Si la réponse est fausse
      else {
      verdic.innerHTML = 'Incorect...';
      answer.innerHTML = 'Answer : ' + egal;
      document.getElementById('prt2').style.animationName = 'incorrect';
      document.getElementById('prt2').style.animationDuration = '1s';
      const audioFaux = new Audio('https://tuteurcliqueur.github.io/sons/wrong-47985.mp3');
      audioFaux.play();
      
      total -= upg.prix;
      affiche();
        }
        document.getElementById('invalide').style.display = 'none';
      }
      //Si l'entrée est invalide (texte, vide, espace, etc.)
      else {
        document.getElementById('invalide').style.display = 'block';
      }
  }
}
//Fonction pour entrer mot de passe pour mme
function boutSpec () {
  document.getElementById('blurJS').style.display = 'block';
  document.getElementById('motDePasseDiv').style.display = 'block';
  document.getElementById("verifyPasse").onclick = function () {
    var motPasse = document.getElementById('motDePasse').value
  if (motPasse == 'motdepasse') { //Si le mot de passe est correct
    total += 10000000000
    document.getElementById('motDePasseDiv').style.display = 'none';
    document.getElementById('blurJS').style.display = 'none';
    document.getElementById('motDePasse').value = ''
    const audioVrai = new Audio('https://tuteurcliqueur.github.io/sons/cha-ching-money.mp3');
      audioVrai.play();
  }
  //Si le mot de passe est incorrect
  else {
    document.getElementById('motDePasseDiv').style.display = 'none';
    document.getElementById('blurJS').style.display = 'none';
    const audioFaux = new Audio('https://tuteurcliqueur.github.io/sons/wrong-47985.mp3');
      audioFaux.play();
  }

  }
}
