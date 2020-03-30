// OGGETTO ESERCIZIO
// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;


// variabili globali
var word = prompt("Scrivi la tua parola per sapere se è palindroma");
var invertedWord; //variabile di appoggio per contenere parola invertita

// funzione per invertire una parola
// Dichiaro 3 variabili interne alla funzione per "salvare" ogni step della funzione stessa
function reverseWord(word) {
    // SPLIT: prende singolarmente i caratteri della stringa e li inserisce in array
    var splitWord = word.split("");
    // REVERSE: inverte la posizione dei caratteri dell'array
    var reverseWord = splitWord.reverse("");
    // JOIN: unisce i caratteri dell'array per formare di nuovo una stringa
    var joinWord = reverseWord.join("");

    return joinWord;

    // SCRITTURA COMPATTA: return word.split("").reverse("").join("");
}

// inserisco il "risultato" della funzione nella variabile inizializzata precedentemente
invertedWord = reverseWord(word);

console.log(invertedWord);

// condizionale per output
if (word === invertedWord) {
    alert("La parola che hai scritto è palindroma");
} else {
    alert("La parola che hai scritto NON è palindroma");
}
