const prompt = require('prompt-sync')();

console.log("---Apuração de Votos em uma Eleição Sindical---");

const c1 = Number(prompt("insira a quantidade de votos válidos para o candidato 1 : "));
const c2 = Number(prompt("insira a quantidade de votos válidos para o candidato 2 : "));
const c3 = Number(prompt("insira a quantidade de votos válidos para o candidato 3 : "));

const vn = Number(prompt("insira a quantidade de votos nulos: "));
const vb = Number(prompt("insira a quantidade de votos em branco: "));

const nte = c1 + c2 + c3 + vn + vb;
const pc1 = (c1 / nte) * 100;  
const pc2 = (c2 / nte) * 100;
const pc3 = (c3 / nte) * 100;
const pvn = (vn / nte) * 100;
const pvb = (vb / nte) * 100;

console.log(`O numero total de eleitores é: ${nte}`);
console.log(`Percentual de votos para o candidato 1: ${pc1.toFixed(2)}%`);
console.log(`Percentual de votos para o candidato 2: ${pc2.toFixed(2)}%`);
console.log(`Percentual de votos para o candidato 3: ${pc3.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${pvn.toFixed(2)}%`);
console.log(`Percentual de votos em branco: ${pvb.toFixed(2)}%`);
