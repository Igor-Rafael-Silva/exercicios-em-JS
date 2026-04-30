const prompt = require('prompt-sync')();

console.log("---Cálculo do Quadrado de um Número Inteiro---");
const numero = Number(prompt("Digite um número inteiro: "));

const quadrado = numero * numero;
console.log(`O quadrado do número ${numero} é: ${quadrado}`);   