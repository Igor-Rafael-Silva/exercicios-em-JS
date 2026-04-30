const prompt = require('prompt-sync')();

console.log("---Conversão de Dólar para Real---");
const dolar = Number(prompt('insira um valor em dólar (US$): '));
const real = dolar * 5.60;

console.log(`O valor convertido em real é: ${real} R$`);