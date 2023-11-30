// Commento riga singola in JS

/* 
    Commento
    multi
    riga
    in
    JS
*/

// document.writeln(variabileUno);

let variabileUno = 'Palla rossa';
// var variabileUno = 1;
// let variabileUno = 'Palla rossa';
document.writeln(variabileUno);

variabileUno = 'Palla blu';
document.writeln(variabileUno);

// Come scrivere nel body
document.writeln('Ciao raghi');

// Come mostrare un pop up BLOCCANTE all'utente
// alert('Hello World from alert!');

// Come cambiare il contenuto di un tag che ha uno specifico ID
document.getElementById('my-div').innerHTML = 'Hello "ciao" World!';
document.getElementById('my-div').innerHTML = "Hello Gigi D'Alessio World!";

const stringaConApiciSingoli = 'Alessio';
const stringaConApiciDoppi = "Vietri";
const stringaConTemplateLiteral = `
        Ciao mi chiamo
        Nome: ${stringaConApiciSingoli}
        Cognome: ${stringaConApiciDoppi}
`;
console.log(stringaConTemplateLiteral);



let variabileConNumero = 3;
let variabileConTesto = 'Alessio';
console.log(variabileConTesto);

let miaVariabile;
console.log(miaVariabile);
miaVariabile = 'Ciao';
console.log(miaVariabile);

const miaCostante = 'Ciao da costante';
console.log(miaCostante);

const x = 5;
console.log(x);
let y = 2;
console.log(y);
// Qui y ha valore 2
y = x + y;
// Qui y ha valore 7
document.writeln(y);

console.log('Cosa 1', y, variabileConNumero);

let sommaDieci = 1;

sommaDieci = sommaDieci + 2;
console.log('Valore della somma dei numeri fino a 2', sommaDieci);

sommaDieci = sommaDieci + 3;
console.log('Valore della somma dei numeri fino a 3', sommaDieci);

console.log(typeof sommaDieci);

const stringaUno = 'Ciao';
const stringaDue = 'ragazzi';
const stringaRisultato = stringaUno + ' ' + stringaDue;

console.log(stringaRisultato);

const tipoDiStringaRisultato = typeof stringaRisultato;
console.log(tipoDiStringaRisultato);

const variabileVera = true;
let variabileFalsa = false;
let variabileNull = null;

console.log(typeof document);
console.log(typeof undefined);
console.log(typeof null);
	
const text = prompt('Dimmi qualcosa:');
console.log(typeof text);
console.log('Valore preso dal prompt:', text);

console.log(`
    L'utente ha inserito:
    ${text}
`);