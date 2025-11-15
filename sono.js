var acordou = parseInt(prompt("Hora de acordar "))
var dormiu = parseInt(prompt("Hora de dormir: "))
var sono = 0
if(dormiu>12 && acordou<12){
    sono = 24 - (dormiu - acordou)
    alert(`${sono} horas de sono`)
}
else if(dormiu>12 || acordou>12){
    sono=(24-dormiu)+acordou
}else{
    sono = acordou - dormiu
    alert(`${sono} horas de sono`)
}
let i = 1
while(i <= sono){
alert(`${i} horas(s) dormindo`)
i++
}