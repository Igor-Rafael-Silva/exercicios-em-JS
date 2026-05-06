const prompt = require('prompt-sync')();

console.log("--- Verificação de Valor Menor ou Igual a 3- --");

let N1 = Number(prompt("Digite um número: "));

if (N1 <= 3){
console.log(`Número: ${N1}`)
}