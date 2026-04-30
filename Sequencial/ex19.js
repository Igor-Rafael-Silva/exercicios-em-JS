const prompt = require('prompt-sync')();

 console.log("---Cálculo das Quatro Operações Básicas---");

const v1 = Number(prompt("insira o primeiro valor numéricos: "));
const v2 = Number(prompt("insira o segundo valor numéricos: "));

const ad = v1 + v2 ;
const sub = v1 - v2 ;
const mult = v1 * v2 ;
const div= v1 / v2 ;

console.log(`\n-Adição: ${v1} + ${v2} = ${ad}`);
console.log(`-Subtração: ${v1} - ${v2} = ${sub}`);
console.log(`-Multiplicação: ${v1} * ${v2} = ${mult}`);
console.log(`-Divisão: ${v1} / ${v2} = ${div}`);