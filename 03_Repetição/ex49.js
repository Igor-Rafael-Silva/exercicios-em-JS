const prompt = require('prompt-sync')();

console.log("--- Potência de uma Base Elevada a um Expoente ---");

let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt("Digite o expoente: "));

let potencia = base;

for(let i=1; i < expoente; i++){
potencia = potencia * base;}
console.log(`${base} elevado a ${expoente} = ${potencia}`);