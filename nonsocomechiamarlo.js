// chiedere nome
var nome = prompt("Come ti chiami?");

// chiedere cognome
var cognome = prompt("E il tuo cognome invece?");

// chiedere colore preferito
var colore = prompt("Di che colore era il cavallo bianco di Napoleone?");

// password e stampadati
var password = nome + cognome + colore + 19;

document.getElementById("javapower").innerHTML = password;
