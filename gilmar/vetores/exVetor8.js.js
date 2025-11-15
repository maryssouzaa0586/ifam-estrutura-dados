let numero = parseInt(prompt("Quantos números você que exibir? "))
let tabuada = [ ]
for(let i=0; i<=10; i++){
    tabuada[i] = numero * i
}
document.writeln("<b>" + "Tabuada do numero: " + numero + "<br>")
for(let i=0; i<=10; i++){
    document.writeln(numero + " X " + i + " = " + tabuada[i] + " <br> ")
}