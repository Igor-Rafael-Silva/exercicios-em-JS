const prompt = require('prompt-sync')();

 console.log ("---Cálculo da Soma dos Quadrados de Três Números---");

 const num1 = parseFloat(prompt("Digite o primeiro número: "));
 const num2 = parseFloat(prompt("Digite o segundo número: "));
 const num3 = parseFloat(prompt("Digite o terceiro número: "));

 const somaQuadrados = (num1 ** 2) + (num2 ** 2) + (num3 ** 2);

 console.log(`A soma dos quadrados dos números é: ${somaQuadrados}`);