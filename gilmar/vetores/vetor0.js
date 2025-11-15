//leia e mostre um vetor de numeros inteiros.
// A seguir conte quantos valores parres e impares existem no vetor
let quantidade = parseInt(prompt("Quantos números "))
var pares = 0, impares = 0
const numeros = []
for(let i =0; i<quantidade;i++){
    numeros[i] = prompt( )
    if(numeros[i] % 2 ==0)
        pares++
    else
        impares++
}
document.writeln(`<br>Numeros informados:</b><br>`)
for(let i = 0; i<quantidade; i++){
    document.writeln(numeros[i])
}
document.writeln(`<br>Quantidade de pares: ${pares}<br>Quantiadde de impares: ${impares}`)