const prompt = require('prompt-sync')();

console.log("---Cálculo da Área de uma Circunferência---");

const raio = Number(prompt("insira o valor do raio da circunferência: "));

const area = 3.14 * raio * raio ;

console.log(`O valor da área calculada é: ${area}`);