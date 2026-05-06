const prompt = require('prompt-sync')();

console.log("---Divisíveis por 2 ou 3---");

const n1 = Number(prompt('Insira o primeiro número: '));
const n2 = Number(prompt('Insira o segundo número: '));
const n3 = Number(prompt('Insira o terceiro número: '));
const n4 = Number(prompt('Insira o quarto número: '));

console.log("\nValores divisíveis por 2 ou 3:");

if (n1 % 2 === 0 || n1 % 3 === 0) {
    console.log(n1);
}

if (n2 % 2 === 0 || n2 % 3 === 0) {
    console.log(n2);
}

if (n3 % 2 === 0 || n3 % 3 === 0) {
    console.log(n3);
}

if (n4 % 2 === 0 || n4 % 3 === 0) {
    console.log(n4);
}