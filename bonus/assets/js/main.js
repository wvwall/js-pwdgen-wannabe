var nome = prompt("-ALT! CHI SIETE?");

var motivo = prompt("-COSA FATE? COSA PORTATE?")

var numero = prompt("SI MA QUANTI SIETE?" + (" In cifre:"))

document.getElementById("numero").innerHTML = "Numero persone :" + numero ;

document.getElementById("motivo").innerHTML = "Trasporta/no :" + motivo ;

document.getElementById("fiorino").innerHTML = nome + " " + ",un fiorino!";