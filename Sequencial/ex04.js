
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Lata de Óleo ---");

let raio = Number(prompt("Digite o raio da base (cm): "));
let altura = Number(prompt("Digite a altura da lata (cm): "));
let volume = Math.PI * (raio ** 2) * altura;

console.log(`O volume da lata de óleo é: ${volume.toFixed(2)} cm³`);
