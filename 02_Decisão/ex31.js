const prompt = require('prompt-sync')();

console.log("---Equação do 2º Grau---");

const a = Number(prompt('Insira o valor de a: '));
const b = Number(prompt('Insira o valor de b: '));
const c = Number(prompt('Insira o valor de c: '));

const delta = (b ** 2) - (4 * a * c);

console.log(`\nDelta: ${delta}`);

if (delta < 0) {
    console.log("Não existem raízes reais");
} else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`x1 = ${x1.toFixed(2)}`);
    console.log(`x2 = ${x2.toFixed(2)}`);
}