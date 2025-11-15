let carrinho = parseInt(prompt("Informe a quantidade de itens: "))
var total = 0
document.writeln(`<b>Mercadinho da Mariana</b><br>`)
for(let i =1; i<= carrinho; i++){
    var item  = parseFloat(prompt("Valor: "))
    document.writeln(`Item ${i}: R$ ${item}<br>`)
    total+=item
}
document.writeln(`Valor total: R$ ${total}`)
