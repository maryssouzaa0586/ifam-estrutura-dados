let horas = parseInt(prompt("Informe as horas? "))
if(horas==0)
    alert(`Meia noite`)
else if(horas==12)
  alert(`Meio-dia`)
else if(horas<12){
  alert(`${horas} AM`)
}else{
  alert(`${horas-12} PM`)
}