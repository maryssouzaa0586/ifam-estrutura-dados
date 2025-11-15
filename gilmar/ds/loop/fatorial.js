let numero = parseInt(prompt("Número ? "))
var fatorial = 1
for(let i=1; i<=numero; i++){
   fatorial*=i;
}
document.writeln(`${numero} != ${fatorial}`)