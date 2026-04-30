const prompt = require('prompt-sync')();

console.log("---Cálculo do Volume de uma Esfera---");

const raio = Number(prompt('Insira o raio da esfera: '));

const volume = (4/3) * Math.PI * (raio ** 3);

console.log(`\nVolume da esfera: ${volume.toFixed(2)}`);