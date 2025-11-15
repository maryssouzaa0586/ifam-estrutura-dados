let quantidade = parseInt(prompt("Quantos itens serão registrados? "))
let item = [ ]
let total = 0
for(let i=0; i<quantidade; i++){
   item[i] = parseInt(prompt(`Preço do item? ${i+1} `))
 total+=item[i]
} 
document.writeln(`<b>Lista: <br>`)
for(let i=0; i<quantidade; i++){
    document.writeln(`<b><br>Item: ${i+1} R$ ${item[i].toFixed(2)}<br>`)
}
document.writeln(`<br><b>Total da compra: ${total.toFixed(2)}`)