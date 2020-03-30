// OGGETTO ESERCIZIO
// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;

// METODO: FUNZIONE CREATA DA ME
// // variabili globali
var word = prompt("Scrivi la tua parola per sapere se è palindroma");


// creo funzione che inverta le parole
function revertedWord(word) {
    // creo variabile d'appoggio dove verrà inserito ogni singolo carattere della parola scelta
     var revWord = "";

     // ciclo per percorrere al contrario la parola e inserire ogni carattere all'interno della nuova variabile
     for (var i = word.length - 1; i >= 0; i--) {
         revWord += word[i];
     }
     return revWord;
}

var newWord = revertedWord(word);

// condizionale per output
if (word === newWord) {
    alert("La parola " + word + " è palindroma");
} else {
    alert("La parola " + word + " NON è palindroma");
}



// METODO: FUNZIONI BUILT-IN
// // funzione per invertire una parola
// // Dichiaro 3 variabili interne alla funzione per "salvare" ogni step della funzione stessa
// function reverseWord(word) {
//     // SPLIT: prende singolarmente i caratteri della stringa e li inserisce in array
//     var splitWord = word.split("");
//     // REVERSE: inverte la posizione dei caratteri dell'array
//     var reverseWord = splitWord.reverse("");
//     // JOIN: unisce i caratteri dell'array per formare di nuovo una stringa
//     var joinWord = reverseWord.join("");
//
//     return joinWord;
//
//     // SCRITTURA COMPATTA: return word.split("").reverse("").join("");
//
// }
//
// // inserisco il "risultato" della funzione nella variabile inizializzata precedentemente
// invertedWord = reverseWord(word);
//
// console.log(invertedWord);
//
// // condizionale per output
// if (word === invertedWord) {
//     alert("La parola che hai scritto è palindroma");
// } else {
//     alert("La parola che hai scritto NON è palindroma");
// }
