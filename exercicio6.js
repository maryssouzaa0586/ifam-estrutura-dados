let paginas= parseInt(prompt("Qual o número de paginas? ")) 
let impressao = prompt("Qual o tipo de impressao? (f = frente e verso 0.10 a unidade/ l = lado único 0.15 a unidade")
let valor
if(impressao=="f"){valor = 0.10
}else{valor = 0.15}
let total = paginas * valor
document.writeln(`O valor da impressão é: R$ ${total.toFixed(2)}<br>`)
document.writeln("Obrigada pela a comprar!")