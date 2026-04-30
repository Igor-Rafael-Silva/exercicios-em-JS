const prompt = require('prompt-sync')();
console.log("---Troca de Valores entre Variáveis---");
let A = Number(prompt("insira o valor para a variável A: "));
let B = Number(prompt("insira o valor para a variável B: "));

let temp = A;
A = B;
B = temp;

console.log(`Ante da troca: A = ${B}, B = ${A} 
Depois da troca: A = ${A}, B = ${B}`);