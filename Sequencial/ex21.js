const prompt = require('prompt-sync')();

console.log("---Cálculo de Potência---");

const base = Number(prompt('Insira a base: '));
const expoente = Number(prompt('Insira o expoente: '));

const potencia = base ** expoente;

console.log(`\nResultado: ${potencia}`);