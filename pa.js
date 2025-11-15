let a1= parseInt(prompt("Qual o primeiro termo? "))
let n = parseInt(prompt("Quantos termos? "))
let r = parseInt(prompt("Qual é a razão?"))
let an=a1+(n-1)*r
//let i = 1
while(a1<=an){
    document.writeln(a1 + `,`)
    a1+=r
}