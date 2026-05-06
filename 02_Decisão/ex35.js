const prompt = require('prompt-sync')();

console.log("---Maior e Menor Valor---");

const n1 = Number(prompt('Insira o primeiro número: '));
const n2 = Number(prompt('Insira o segundo número: '));
const n3 = Number(prompt('Insira o terceiro número: '));
const n4 = Number(prompt('Insira o quarto número: '));
const n5 = Number(prompt('Insira o quinto número: '));

const maior = Math.max(n1, n2, n3, n4, n5);
const menor = Math.min(n1, n2, n3, n4, n5);

console.log(`\nMaior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);