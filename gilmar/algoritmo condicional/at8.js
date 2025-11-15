let A = parseInt(prompt("Qual o valor A? "))
let B = parseInt(prompt("Qual o valor B? "))
let C = parseInt(prompt("Qual o valor C? "))
let numero = [A, B, C]
let maior, meio, menor
if (A >= B && A >= C){
maior = A
    if (B >= C) {
        meio = B
        menor = C
    } else {
        meio = C
        menor = B
    }
}else if (B >= A && B >= C) {
    maior = B
    if (A >= C) {meio = A, menor = C
    } else {meio = C, menor = A
    }
} else {
    maior = C
    if (A >= B) {meio = A, menor = B
    } else {
        meio = B, menor = A
    }
}
document.writeln(`Ordem decrescente: ${maior}, ${meio}, ${menor}`)