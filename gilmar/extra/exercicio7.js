let temperatura = parseFloat(prompt("Temperatura:"))
let graus = parseInt(prompt("Graus (1 = Celsius / 0 = Fahrenheit):"))
if (graus == 1) {
  let celsius = (temperatura - 30) / 2
  alert(`Temperatura em Celsius: ${celsius.toFixed(1)}°C`)
} else {
  let fahrenheit = (temperatura * 2) + 30
  alert(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(1)}°F`)
}