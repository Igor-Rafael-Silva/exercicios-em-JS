const prompt = require('prompt-sync')();

console.log("---Sucessor e Antecessor---");

const numero = Number(prompt('Insira um número inteiro: '));

const sucessor = numero + 1;
const antecessor = numero - 1;

console.log(`\nAntecessor: ${antecessor}`);
console.log(`Sucessor: ${sucessor}`);