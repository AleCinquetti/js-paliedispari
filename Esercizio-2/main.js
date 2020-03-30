// OGGETTO ESERCIZIO
// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.



// scelta utente
var userChoice = prompt("pari o dispari?");

// funzione per stampare numero casuale
function randomNumber(a, b) {
  var number = Math.floor(Math.random() * (b - a + 1)) + a;
  return number;
}
// numeri risultato della funzione
var firstNumber = alert(randomNumber(1, 5));
var secondNumber = alert(randomNumber(1, 5));


// funzione per stabilire se somma è pari o dispari
function oddOrEven(firstNumber, secondNumber) {
  var result;
  var sum = firstNumber + secondNumber;
  if (sum % 2 == 0) {
    result = "pari";
  } else {
    result = "dispari";
  }
  return result;
}
// variabile appoggio che contiene risultato funzione (se pari o dispari)
var gameResult = oddOrEven(firstNumber, secondNumber);

// condizionale per output
if (userChoice == gameResult) {
  userChoice = alert("Complimenti, hai vinto!");
} else {
  userchoice = alert("Peccato, non hai vinto");
}

console.log(userChoice);
