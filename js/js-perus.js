
function tarkista() {
  var annaLuku1 = Number(document.forms["kysyLuku"]["luku1"].value);
  var annaLuku2 = Number(document.forms["kysyLuku"]["luku2"].value);
  var summa = annaLuku1 + annaLuku2;
  var erotus = annaLuku1 - annaLuku2;
  var tulo = annaLuku1 * annaLuku2;
  var jakolasku = annaLuku1 / annaLuku2;


  switch ((annaLuku1 >= 1 && annaLuku1 <= 10) && (annaLuku2 >=1 && annaLuku2 <= 10))  {
    case true:

  document.getElementById("summaP").innerHTML = "Summa: " + summa;
  document.getElementById("erotusP").innerHTML = "Erotus: " + erotus;
  document.getElementById("tuloP").innerHTML = "Tulo: " + tulo;
  document.getElementById("jakolaskuP").innerHTML = "Jakolasku: " + jakolasku;

  var i=0;
  var text="";

  if (annaLuku1<=annaLuku2) {
    for (i = annaLuku1; i <= annaLuku2; i++) {
      text = text + i + " ";
    }
  } else {
      for (i = annaLuku2; i <= annaLuku1; i++) {
        text = text + i + " ";
      }
    }
    document.getElementById("luetteloP").innerHTML = "Lista: " + text;

    break;
    default:

    alert("Annetun arvon pitää olla 1 - 10.");
}

function tyhjenna() {
  document.getElementById("summaP").innerHTML = " ";
  document.getElementById("erotusP").innerHTML = " ";
  document.getElementById("tuloP").innerHTML = " ";
  document.getElementById("jakolaskuP").innerHTML = " ";
  document.forms["kysyLuku"]["luku1"].value = "";
  document.forms["kysyLuku"]["luku2"].value = "";
}
}
