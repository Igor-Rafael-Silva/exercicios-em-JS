const prompt = require('prompt-sync')();

console.log('---Conversão de Graus Celsius em Fahrenheit ---');

for(let i = 10 ;i <= 100; i+=10){
let Fahrenheit = (i * 9/5) + 32;
console.log(`${i}°C = ${Fahrenheit}°F`);}