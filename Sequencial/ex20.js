prompt = require('prompt-sync')();

console.log("---Cálculo da Velocidade de um Projétil---");

const km = Number(prompt('insira a distância percorrida em quilômetros: '));
const tempo = Number(prompt('insira o tempo em horas: '));
 
const velocidade = km / tempo / 3.6 ; 

console.log(`\n-O valor da velocidade em metros por segundo é: ${velocidade.toFixed(2)} m/s`)