const prompt = require('prompt-sync')();

console.log("---Soma e Verificação---");

const n1 = Number(prompt('Insira o primeiro valor: '));
const n2 = Number(prompt('Insira o segundo valor: '));
const n3 = Number(prompt('Insira o terceiro valor: '));

const soma = n1 + n2 + n3;

if (soma > 100) {
    console.log(`\nSoma: ${soma}`);
}