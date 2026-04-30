const prompt = require('prompt-sync')();

console.log("---Quadrado da Divisão---");

const num1 = Number(prompt('Insira o primeiro número: '));
const num2 = Number(prompt('Insira o segundo número: '));

const divisao = num1 / num2;
const resultado = divisao ** 2;

console.log(`\nResultado: ${resultado.toFixed(2)}`);