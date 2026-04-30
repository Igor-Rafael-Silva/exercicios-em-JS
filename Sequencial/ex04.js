
const prompt = require('prompt-sync')();

console.log("--- Cálculo de Combústivel Gasto ---");

let distancia = Number(prompt("Digite a distancia percorrida em km : "));
let consumo = Number(prompt("Digite o consumo em Km :")); 
const litros = distancia / consumo ; 
console.log(`a quantidade de combustivel gasta na viagem é de ${litros} litros.`);