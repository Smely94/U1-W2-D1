/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype di JS sono:
STRING: Il datatype STRING in JS indica sia il singolo carattere che la sequenza finita di caratteri. Le stringhe vengono definite attraverso l'utilizzo degli apici doppi o singoli (ma è sempre consigliato usare i doppi).       ESEMPIO: let name = "nome"
NUMBER: Il datatype NUMERICO in JS viene indicato senza distinzione tra intero e decimale. Il decimale viene espresso con il punto.       ESEMPIO: let number = 63067.100
BOLEAN: Il datatype BOOLEAN in JS ammette soltanto due valori True e False. Questo tipo di dato è tipico dei controlli condizionali, utili per far prendere delle decisioni al nostro codice.
UNDEFINED: Questo datatype indica l'assenza di un valore. Ad esempio una variabile appena scritta senza e senza ancora mai inserito un valore.  
NULL: Questo datatype rappresenta l'assenza volontaria di un valore. Che possiamo andare ad aggiungere poi in seguito.

SIMBOL: Questo datatype rappresenta un entità singola ed è molot poco utilizzata.
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = "Samuele";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let addizione = 12 + 20;
console.log (addizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
Uncaught TypeError: Assignment to constant variable.
    at D1.js:57:6
(anonymous) @ D1.js:57
Viene visualizzato questo errore dal browser quando provo a cambiare il valote di una variabile cont,
Non è possibile appunto modificare il valore di una variabile cont appunto perchè è continua!
*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = (4 - x)
console.log (sottrazione) 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"

console.log (name1 === name2) // False perchè ha un caratte minuscolo e l'altro ha un carattere maiuscolo


// EXTRA: Fatta una ricerca online ho capito che applicando la sintassi (.toLowerCase) ad una stringa tutti i caratteri diventano minuscoli.
// Quindi come in questo caso name1 === name2 ==>true 

console.log (name1.toLowerCase === name2.toLowerCase)


