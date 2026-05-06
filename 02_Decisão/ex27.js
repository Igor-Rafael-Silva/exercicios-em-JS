const prompt = require('prompt-sync')();

console.log("---Diferença entre Dois Números---");

const num1 = Number(prompt('Insira o primeiro número: '));
const num2 = Number(prompt('Insira o segundo número: '));

const maior = Math.max(num1, num2);
const menor = Math.min(num1, num2);
const diferenca = maior - menor;

console.log(`\nDiferença: ${diferenca}`);