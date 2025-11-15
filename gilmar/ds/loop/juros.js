let capital = prompt("Qual é a capital? ")
let taxa = parseFloat(prompt("Qual a taxa em meses? "))
let tempo = prompt("Quanto tempo passou? ")
let juros = capital*taxaDecimal**tempo 
for(i=0; i<=tempo )
document.writeln(`Você deve pagar R$: ${juros.toFixed(2)}`)