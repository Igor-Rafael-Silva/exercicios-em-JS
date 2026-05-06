const prompt = require('prompt-sync')();

console.log("---Verificação de Faixa---");

const numero = Number(prompt('Insira um número inteiro: '));

if (numero >= 1 && numero <= 9) {
    console.log('\nO número está na faixa permitida');
} else {
    console.log('\nO número NÃO está na faixa permitida');
}