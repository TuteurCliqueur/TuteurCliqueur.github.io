 var total = 1000000 // montant de commencement
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
    //Question part
    numOf: 2,
    range: 10,
    opertbl: [' + '], //Put spaces when putting operations
  },
  
  {
    annee: 2,
    prix: 100,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 10,
    mainId: 'prix2',
    montantId: 'numberId2',
    numOf: 2,
    range: 20,
    opertbl: [' - '], //Put spaces when putting operations
  },
  
  {
    annee: 3,
    prix: 1000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 100,
    mainId: 'prix3',
    montantId: 'numberId3',
    numOf: 4,
    range: 10,
    opertbl: [' + ', ' - '], //Put spaces when putting operations
  },
  
  {
    annee: 4,
    prix: 10000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 500,
    mainId: 'prix4',
    montantId: 'numberId4',
    numOf: 2,
    range: 10,
    opertbl: [' * '], //Put spaces when putting operations
  },  
  
  {
    annee: 5,
    prix: 50000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 1000,
    mainId: 'prix5',
    montantId: 'numberId5',
    numOf: 2,
    range: 15,
    opertbl: [' / '], //Put spaces when putting operations
  },
    
  {
    annee: 6,
    prix: 100000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 1750,
    mainId: 'prix6',
    montantId: 'numberId6',
    numOf: 4,
    range: 50,
    opertbl: [' / ', ' * '], //Put spaces when putting operations
  },
    
  {
    annee: 7,
    prix: 175000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 2250,
    mainId: 'prix7',
    montantId: 'numberId7',
    numOf: 2, //Doit etre deux parceque c'est un rectangle
    range: 75,
    opertbl: [' + ', ' * '], //Put spaces when putting operations
  },
    
  {
    annee: 8,
    prix: 300000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 2750,
    mainId: 'prix8',
    montantId: 'numberId8',
    numOf: 4,
    range: 5,
    opertbl: [' √ ', ' ** '], //WHEN DOING SQUARE ROOT, MAKE IT FIRST IN ARRAY, this one is complicated
  },
    
  {
    annee: 9,
    prix: 450000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 4000,
    mainId: 'prix9',
    montantId: 'numberId9',
    numOf: 2, //Doit etre deux parceque c'est un rectangle
    range: 150,
    opertbl: [' + ', ' * '], //Put spaces when putting operations
  },
    
  {
    annee: 10,
    prix: 650000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 6000,
    mainId: 'prix10',
    montantId: 'numberId10',
    numOf: 2, //Doit etre deux parceque c'est un rectangle
    range: 300,
    opertbl: ['sin', 'cos', 'tan'], //Put spaces when putting operations
  },
    
  {
    annee: 11,
    prix: 1000000,
    mult: 1, //Keep all multipliers to one
    numDe: 0, //Keep all numDe to zero
    cps: 10000,
    mainId: 'prix11',
    montantId: 'numberId11',
    opertbl: ['sin', 'cos'], //Put spaces when putting operations
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
  locked(upgrades[3].prix, 'box4')
  locked(upgrades[4].prix, 'box5')
  locked(upgrades[5].prix, 'box6')
  locked(upgrades[6].prix, 'box7')
  locked(upgrades[7].prix, 'box8')
  locked(upgrades[8].prix, 'box9')
  locked(upgrades[9].prix, 'box10')
  locked(upgrades[10].prix, 'box11')
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
  var qType = document.getElementById('type')
  qType.innerHTML = 'Effectué cette équation'
  
  if (total >= upg.prix) {
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
  
  else if (index == 10) {
    const trigTbl = ['1/2', '1', '0', '√3/2', '√2/2']
    let operand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length))]
    let dispCercleUnit = trigTbl[parseInt(Math.random() * (trigTbl.length))]
    let signChoisi = Math.random()
    let sign = ''
    let cercleUnit = null
    let quadChoisi = Math.random()
    let quadrant = ''
    let quadrantText = ' si on est dans la quadrant '
    
    
    
    if ((signChoisi <= 0.5) && !dispCercleUnit.includes('0')) { //Pourque sa ajoute pas une signe négatif quand c'est 0
      sign = '-'
    }



   dispCercleUnit = sign + dispCercleUnit
   cercleUnit = dispCercleUnit
    
     if (dispCercleUnit.includes('√')) {
      cercleUnit = dispCercleUnit.replace(/√(\d+)/g, "Math.sqrt($1)") 
     }

    if (operand.includes('cos')) {
      
      egal = Math.acos(eval(cercleUnit))
      egal = Math.abs((egal * (180 / Math.PI)).toFixed()) 
      
      /*Javascript n'est pas exact avec ses calculs, donc j'utilise toFixed 
      car je veux arrondir (defaut est 0). C'est aussi en Radian donc je dois faire * 
      (180 / Math.PI) pour la conversion. De plus, les radians peuvent donner 
      des négatif donc je doit changer à un nombre positif avec Math.abs() (Dans 
      cette cas, on connais le quadran et on fai l'opération néssesaire, c'est 
      pourquoi il doit être toujours positif. Ex : egal = 180 - (-70), n'est pas 
      bonne, car sa va ajouter et pas soustraire.)*/
      
      if (!(dispCercleUnit == '0' || dispCercleUnit == '1')) {
      if (sign == '-') {
        if (quadChoisi <= 0.5) {
          quadrant = quadrantText + '2'
           egal = 180 - egal
        }
        else {
          quadrant = quadrantText + '3'
          egal = 180 + egal
        }
      }
      
      else {
        if (quadChoisi <= 0.5) {
          quadrant = quadrantText + '1'
        }
        else { 
          quadrant = quadrantText + '4'
          egal = 360 - egal
        }
      }
      }
        dispQuestionVar = 'Cosinus de quel angle égal à ' + dispCercleUnit + quadrant
      
    }
    
    if (operand.includes('sin')) {
      egal = Math.asin(eval(cercleUnit))
      egal = (egal * (180 / Math.PI)).toFixed()
      
      
      if (!(dispCercleUnit.includes('0') || dispCercleUnit.includes('1'))) {
      if (sign == '-') {
        if (quadChoisi <= 0.5) {
          quadrant = quadrantText + '4'
           egal = 360 - egal
        }
        else {
          quadrant = quadrantText + '3'
          egal = 180 + egal
        }
      }
      
      else {
        if (quadChoisi <= 0.5) {
          quadrant = quadrantText + '1'
        }
        else { 
          quadrant = quadrantText + '2'
          egal = 180 - egal
        }
      }
      }
      
      dispQuestionVar = 'Sinus de quel angle égal à ' + dispCercleUnit + quadrant
      
    }
  
    question.innerHTML = dispQuestionVar
  }
  
  else if (index == 9) {
  operand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length))];
  num1 = parseInt(Math.random() * upg.range) + 1;
  num2 = parseInt(Math.random() * 60) + 1;  // Angle in degrees
  
  thet.innerHTML = 'θ = ' + num2 + '°';

  // Convert num2 (angle in degrees) to radians
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
    
    document.getElementById('question').style.display = 'block'
    document.getElementById('grRectId').style.display = 'none'
    
  for (let i = 0; i < upg.numOf; i++) {
    
    ranOperand = ''
    number = parseInt(Math.random() * upg.range) + 1
    operand = upg.opertbl[parseInt(Math.random() * (upg.opertbl.length))]

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
  

  document.getElementById("verify").onclick = function () {

    var userAnswer = document.getElementById('userAnswer').value;
    document.getElementById('prt2').style.display = 'block';
    document.getElementById('prt1').style.display = 'none';

    if (userAnswer == egal) {
      verdic.innerHTML = 'Correct!';
      answer.innerHTML = 'Answer : ' + egal;
      document.getElementById('prt2').style.animationName = 'correct';
      document.getElementById('prt2').style.animationDuration = '1s';
      const audioVrai = new Audio('https://tuteurcliqueur.github.io/sons/correct-156911.mp3');
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
      const audioFaux = new Audio('https://tuteurcliqueur.github.io/sons/wrong-47985.mp3');
      audioFaux.play();
      
      total -= upg.prix;
      affiche();
        }
      }
}
  
