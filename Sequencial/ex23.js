const prompt = require('prompt-sync')();

console.log("---Conversão de Pés para Metros---");

const pes = Number(prompt('Insira a medida em pés: '));

const metros = pes * 0.3048;

console.log(`\nMedida em metros: ${metros.toFixed(2)} m`);