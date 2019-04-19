
var virheViesti = document.getElementById('virheViesti');
var komentoRivi = document.getElementById('komentoRivi');
var robottoKuva = document.getElementById('robottoKuva');
var heilutaKasi;



function robotto() {

    if ((komentoRivi.value === 'robotto.wave();') || (komentoRivi.value === ' robotto.wave(); ') || (komentoRivi.value === 'robotto.wave(); ') || (komentoRivi.value === ' robotto.wave();')) {
      virheViesti.innerHTML = "";
      heilutaKasi = setInterval(function() {
        robottoKuva.src = "img/perus.png";
        setTimeout(function() {
          robottoKuva.src = "img/heiluu.png";
        }, 500);
      }, 1000);

    } else {
      virheViesti.innerHTML = 'Syntax Error!!!';
      stopRobotto();

    }
}
function stopRobotto() {
  clearInterval(heilutaKasi);
  setTimeout(function() {
    robottoKuva.src = "img/perus.png";
  }, 500);
}
