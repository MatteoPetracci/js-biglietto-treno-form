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

  if (etaPasseggero == "minorenne") {
    document.

}
}
)


//   document.getElementById("costo_biglietto").innerHTML = "Hai " + etaPasseggero + " anni. Essendo minorenne hai diritto ad uno sconto del 20%! Il prezzo del tuo biglietto è: " + (costoBiglietto - scontoMinorenne);
// } else if (etaPasseggero > 65) {
  //   document.getElementById('costo_biglietto').innerHTML = "Hai " + etaPasseggero + " anni. Gli over 65 hanno diritto ad uno sconto del 40%! Il prezzo del tuo biglietto è: " + (costoBiglietto - scontoOver65);
  // } else if (isNaN(kmPasseggero) || isNaN(etaPasseggero)) {
    //   alert("Non hai inserito un numero valido");
    //   document.getElementById('costo_biglietto').innerHTML = "Inserisci di nuovo i dati"
    //   } else {
      //   document.getElementById('costo_biglietto').innerHTML = "Hai " + etaPasseggero + " anni. Il costo del tuo biglietto è " + costoBiglietto;
      // }






//
// // moltiplicare i km inseriti del passeggero con la variabile costoBiglietto
//
// var costoBiglietto = kmPasseggero * 0.21;
// console.log(costoBiglietto);
//
// // dichiarare variabile sconto minorenne
//
// var scontoMinorenne = (costoBiglietto * 20) / 100 ;
//
// var scontoOver65 = (costoBiglietto * 40) / 100;
//
// // inserire la condizioni con sconto passeggero
//
//
//
// // if (etaPasseggero < 18) {
// //   console.log(costoBiglietto - scontoMinorenne);
// // } else if (etaPasseggero > 65) {
// //   console.log(costoBiglietto - scontoOver65);
// // } else {
// //   console.log(costoBiglietto);
// // }
//
// //  {
//  if (etaPasseggero < 18) {
//   document.getElementById("costo_biglietto").innerHTML = "Hai " + etaPasseggero + " anni. Essendo minorenne hai diritto ad uno sconto del 20%! Il prezzo del tuo biglietto è: " + (costoBiglietto - scontoMinorenne);
// } else if (etaPasseggero > 65) {
//   document.getElementById('costo_biglietto').innerHTML = "Hai " + etaPasseggero + " anni. Gli over 65 hanno diritto ad uno sconto del 40%! Il prezzo del tuo biglietto è: " + (costoBiglietto - scontoOver65);
// } else if (isNaN(kmPasseggero) || isNaN(etaPasseggero)) {
//   alert("Non hai inserito un numero valido");
//   document.getElementById('costo_biglietto').innerHTML = "Inserisci di nuovo i dati"
//   } else {
//   document.getElementById('costo_biglietto').innerHTML = "Hai " + etaPasseggero + " anni. Il costo del tuo biglietto è " + costoBiglietto;
// }
