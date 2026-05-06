const prompt = require('prompt-sync')();

console.log("---Ordenação de Três Números---");

let n1 = Number(prompt('Insira o primeiro número: '));
let n2 = Number(prompt('Insira o segundo número: '));
let n3 = Number(prompt('Insira o terceiro número: '));

if (n1 > n2) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
}

if (n1 > n3) {
    let temp = n1;
    n1 = n3;
    n3 = temp;
}

if (n2 > n3) {
    let temp = n2;
    n2 = n3;
    n3 = temp;
}

console.log(`\nOrdem crescente: ${n1}, ${n2}, ${n3}`);