let timeA = prompt("Nome do time A? ")
let golsA = parseInt(prompt("Quantos gols o time A vez? "))
let timeB = prompt("Nome do time B? ")
let golsB = parseInt(prompt("Quantos gols o time B vez? "))
if(golsA>golsB){
alert(`Vencedor time: ${timeA}`)
}else if(golsB>golsA){
alert(`Vencedor time: ${timeB}`)
}else{
    alert(`EMPATE!`)
}