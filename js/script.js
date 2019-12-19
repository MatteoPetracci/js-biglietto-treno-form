// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// Chiedere i km che vuole percorrere il passeggero

var generaButton = document.getElementById('genera');

generaButton.addEventListener("click",
function() {
  var inputNome = document.getElementById('nomePasseggero');
  var nomeUtente = inputNome.value;
  console.log(nomeUtente);

  var inputKm  = document.getElementById('kmNecessari');
  var kmPasseggero = parseInt(inputKm.value);
  console.log(kmPasseggero);

  var selectEta = document.getElementById('fasciaEta');
  var fasciaEta = selectEta.value;
  console.log(fasciaEta);

  var costoBiglietto = kmPasseggero * 0.21;

  var scontoMinorenne = (costoBiglietto * 20) / 100 ;

  var scontoOver65 = (costoBiglietto * 40) / 100;

  var carrozza = Math.floor(Math.random() *9) + 1;
  var codiceCp = Math.floor(Math.random() * (99999 -90000 + 1)) + 90000;


  document.getElementById('nome-passeggero').innerHTML = nomeUtente;

  if (fasciaEta == "minorenne") {
    document.getElementById('offerta').innerHTML = "Offerta Young";
    document.getElementById('costo_ticket').innerHTML = costoBiglietto - scontoMinorenne;
    document.getElementById('codice_cp').innerHTML = codiceCp;
    document.getElementById("carrozza").innerHTML = carrozza;
  } else if (fasciaEta == "over65") {
  document.getElementById('offerta').innerHTML = "Offerta Silver";
  document.getElementById('costo_ticket').innerHTML = costoBiglietto - scontoOver65;
  document.getElementById('codice_cp').innerHTML = codiceCp;
  document.getElementById("carrozza").innerHTML = carrozza;


} else {
  document.getElementById('offerta').innerHTML = "Biglietto Standard";
  document.getElementById('costo_ticket').innerHTML = costoBiglietto;
  document.getElementById('codice_cp').innerHTML = codiceCp;
  document.getElementById("carrozza").innerHTML = carrozza;
}

}

)
