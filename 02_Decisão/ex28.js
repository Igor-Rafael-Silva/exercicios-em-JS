const prompt = require('prompt-sync')();

console.log("---Classificação de Número---");

const numero = Number(prompt('Insira um número inteiro: '));

if (numero > 0) {
    console.log('\nO número é POSITIVO');
} else if (numero < 0) {
    console.log('\nO número é NEGATIVO');
} else {
    console.log('\nO número é ZERO');
}