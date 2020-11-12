// JSnack 5
// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let numeroUno = prompt(`Inserisci un numero tra 0 e ${myArray.length-1}`);
let numeroDue = prompt(`Inserisci un numero tra 0 e ${myArray.length-1}`);

const arrayCompresi = myArray.filter((element, index) => {
    if (index >= numeroUno && index <= numeroDue) {
       return element
    }
    else if (index >= numeroDue && index <= numeroUno) {
       return element
    }
});

document.getElementById("esercizio").innerHTML = `${arrayCompresi}`;
console.log(arrayCompresi);
