const prompt = require('prompt-sync')();

console.log("---Cálculo do Valor de uma Prestação em Atraso---");
const prestacao = Number(prompt("insira o valor original da prestação: "));
const mesesAtraso = Number(prompt("insira o número de meses em atraso: "));
const juros = Number(prompt("insira a taxa de juros mensal: "));
const valorjuros = prestacao * (1 + (juros / 100) * mesesAtraso);
console.log( `O valor atualizado da prestação é: ${valorjuros}` );