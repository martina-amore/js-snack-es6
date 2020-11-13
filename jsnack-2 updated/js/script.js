// JSnack 2 - Updated
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
  {
    "nome": "blu",
    "peso": 8
  },
  {
    "nome" : "rosso",
    "peso" : 7
  },
  {
    "nome" : "verde",
    "peso" : 9
  }
];


let biciLeggera = bici[0];
for (let i = 0; i < bici.length; i++) {

    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

const {peso, nome} = biciLeggera;
document.getElementById("esercizio").innerHTML = `La bici più leggera si chiama ${nome} e pesa ${peso}`;
