const firstName = prompt("perfavore inserisci il tuo nome")
const firstLastname = prompt("perfavore inserisci il tuo cognome")
const ColorFavorite = prompt("Qual è il tuo colore preferito?")
let output = `${firstName} ${firstLastname} ${ColorFavorite}`
document.getElementById('name').innerHTML = `${output}`
document.getElementById('pass').innerHTML = `la tua password è`+`${firstName}${firstLastname}${ColorFavorite}`+21