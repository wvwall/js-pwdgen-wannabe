/* Chiedi il nome all'utente */

var nome = prompt("INSERISCI IL TUO NOME");


/* Chiedi il cognome */

var cognome = prompt("INSERISCI IL TUO COGNOME")



/* Chiedi il colore preferito */

var colore = prompt("ADESSO IL TUO COLORE PREFERITO")



console.log(nome, cognome, colore);

/* Scrivi sulla pagina */

document.getElementById('user').innerHTML = nome + cognome + colore + "21";