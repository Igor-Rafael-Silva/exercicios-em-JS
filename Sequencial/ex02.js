
const prompt = require('prompt-sync')();
console.log("--- Conversor: Celsius para Fahrenheit ---");
let celsius = Number(prompt("Digite a temperatura em graus Celsius: "));
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C convertido para Fahrenheit é: ${fahrenheit}°F`);
