const prompt = require('prompt-sync')();

console.log("---Multiplicação e Verificação---");

const numero = Number(prompt('Insira um número inteiro: '));

const resultado = numero * 2;

if (resultado > 30) {
    console.log(`\nResultado: ${resultado}`);
}