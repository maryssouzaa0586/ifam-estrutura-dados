let nota1 = parseFloat(prompt("Nota em informática basica? "))
let nota2 = parseFloat(prompt("Nota em redes de computadores?"))
let nota3  = parseFloat(prompt("Nota em Analise de sistemas"))
let nota4 = parseFloat(prompt("Nota em Algoritmos"))
let media = (nota1 + nota2 + nota3 + nota4)/4
document.writeln(`Média: ${media.toFixed(2)}`)
if(media>=7){
    document.writeln(`<br><b>Aprovado`)
}else if(media>=5){
    document.writeln(`<br><b>Recuperação`)
}else{
document.writeln(`<br><b>REPROVADO!!`)
}