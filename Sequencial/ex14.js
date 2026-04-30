const prompt= require('prompt-sync')();

console.log("---Cálculo do Quadrado da Soma de Três Números---");

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));

const soma = num1 + num2 + num3;
const quadradoDaSoma = soma ** 2;

console.log(`O quadrado da soma dos números é: ${quadradoDaSoma}`);   