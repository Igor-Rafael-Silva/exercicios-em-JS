const prompt = require('prompt-sync')();

console.log("---Média e Aprovação---");

const n1 = Number(prompt('Insira a primeira nota: '));
const n2 = Number(prompt('Insira a segunda nota: '));
const n3 = Number(prompt('Insira a terceira nota: '));
const n4 = Number(prompt('Insira a quarta nota: '));

const media = (n1 + n2 + n3 + n4) / 4;

console.log(`\nMédia: ${media.toFixed(2)}`);

if (media >= 5) {
    console.log("Aluno APROVADO");
} else {
    console.log("Aluno REPROVADO");
}