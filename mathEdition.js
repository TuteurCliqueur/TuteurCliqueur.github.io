  var nbAnne = 1
  var total = 0
function clickCounter() {
  total++
  var affiche1 = document.getElementById("counter");
  affiche1.innerHTML = total;
}

var sclick = 0
function parSeconde () {
    sclick++
    var affiche2 = document.getElementById("counter");
    affiche2.innerHTML = sclick;
}
setInterval(parSeconde, 1000)
