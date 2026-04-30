const prompt = require('prompt-sync')();

console.log("---Cálculo de Raiz---");

const base = Number(prompt('Insira a base: '));
const indice = Number(prompt('Insira o índice da raiz: '));

const raiz = base ** (1 / indice);

console.log(`\nResultado da raiz: ${raiz.toFixed(2)}`);