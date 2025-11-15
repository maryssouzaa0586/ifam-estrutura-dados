let n1 = parseInt(prompt("Qual o numero 1? "))
let n2 = parseInt(prompt("Qual o numero 2? "))
let operacao = parseInt(prompt("Operações"))
function multiplicacao(){
    return n1*n2
}
function divisao(){
    return n1/n2
}
function subtracao(){
 return n1-n2
}
function adicao(){
    return n1+n2
}
switch(operacao){
    case "1":
       document.writeln(multiplicacao(n1, n2)); break;
    case "2":
    document.writeln(divisao(n1, n2)); break;
    case "3":
      document.writeln(subtracao(n1, n2)); break;
    case "4":
       document.writeln(adicao(n1, n2)); break;
    default:
        alert("Opção inválida")
}