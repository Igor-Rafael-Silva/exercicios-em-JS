const prompt = require('prompt-sync')();

console.log("---Cálculo do Produto e da Soma de Quatro Números---");

const n1 = Number(prompt("insira o valor do primeiro numero: "));
const n2 = Number(prompt("insira o valor do segundo numero: "));
const n3 = Number(prompt("insira o valor do terceiro numero: "));
const n4 = Number(prompt("insira o valor do Quarto numero: "));

const produto = n1 * n3;
const soma = n2 + n4;

console.log(`Produto: ${produto} (${n1} * ${n3}) e Soma: ${soma} (${n2} + ${n4}).`);