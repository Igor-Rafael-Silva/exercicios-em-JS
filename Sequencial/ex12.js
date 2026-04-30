const prompt = require('prompt-sync')();

console.log("---Conversão de Real para Dólar---");

const real = Number(prompt('insira um valor em real (R$): '));
const dolar = real / 5.60

console.log(`O valor equivalente em dólar (US$) é ${dolar} US$`);