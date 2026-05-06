const prompt = require('prompt-sync')();

console.log("---Par ou Ímpar---");

const numero = Number(prompt('Insira um número inteiro: '));

if (numero % 2 === 0) {
    console.log('\nO número é PAR');
} else {
    console.log('\nO número é ÍMPAR');
}