// JSnack 1A:
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

const palla =
  {
    "nome": "palla",
    "peso": 10
};

console.log(palla);

// JSnack 1B:
// Attraverso un prompt dare la possibilità all’utente di
// modificare il peso della palla.

palla.peso = prompt("Inserisci il peso della palla:");
document.getElementById("esercizio").innerHTML = `Nuovo peso della palla: ${palla.peso}`;
