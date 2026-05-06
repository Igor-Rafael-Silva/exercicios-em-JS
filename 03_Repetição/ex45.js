const prompt = require('prompt-sync')();

console.log("--- Somatório dos Valores Pares ---");

let somaPares = 0;

for (let i = 2; i <= 500; i +=2){
somaPares = somaPares + i;}

console.log(`A soma é: ${somaPares}`);