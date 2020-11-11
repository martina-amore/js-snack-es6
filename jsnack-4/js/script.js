// JSnack 4A
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre
// saranno tutte settate a 0

const squadre = [];
for (let i = 0; i < 3; i++) {
    let squadra = {
    "nome": prompt("Inserisci il nome della squadra"),
    "puntiFatti": 0,
    "falliSubiti": 0
  }
  squadre.push(squadra);
}

numeroRandom = (min, max) => {
    let min = Math.ceil(min);
    let max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// JSnack 4B
// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = numeroRandom(1, 10);
    squadre[i].falliSubiti = numeroRandom(1, 10);
    document.getElementById("esercizio").innerHTML +=
    `Nome: ${squadre[i].nome} <br>
    Punti fatti: ${squadre[i].puntiFatti} <br>
    Falli subiti: ${squadre[i].falliSubiti} <br><br>`;
}
