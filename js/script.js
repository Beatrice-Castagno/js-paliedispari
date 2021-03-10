// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente la parola da verificare
var parolaUtente = prompt("Inserisci la tua parola:");

// Funzione che verifica se la parola è palindroma
function palindrome (stringa) {
  var stringaReverse = "";
  for (var i = stringa.length - 1; i >= 0; i--) {
    stringaReverse = stringaReverse + stringa[i];
  }
  return stringaReverse;
}

var parolaVerificata = palindrome(parolaUtente);

if (parolaUtente == parolaVerificata) {
  alert ("La parola che hai inserito è palindroma.")
}
else {
  alert("La parola che hai inserito non è palindroma.")
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Funzione per verificare se i numeri sono pari o dispari
function pariDispari (num) {
  if (num % 2 == 0) {
    return "pari";
  }
  else {
    return "dispari";
  }
}

// Funzione per generare numero random con intervallo max e min

function numRandom(min, max) {
  var numRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return numRandom;
}

/* Chiedo all'utente se vuole giocare pari o dispari e poi
 il numero che vuole giocare */
var scelta = prompt("Scegli pari o dispari: ");
var sceltaNum = parseInt(prompt("Inserisci un numero da 1 a 5: "));
var numCpu = numRandom (1, 5);

 // Sommo i due numeri
var somma = sceltaNum + numCpu;

 /* Uso la funzione per verificare se la somma dei numeri è
 pari o dispari */

var risultato = pariDispari(somma)

// Verifico e stampo chi ha vinto e chi ha perso

if (scelta == risultato) {
  alert ("Hai vinto! Il numero vincente è: " + risultato + " " + somma);
}
else {
  alert("Hai perso! Ha vinto la Cpu. Il numero vincente era: " + risultato + " " + somma);
}
