const prompt = require('prompt-sync')();

console.log('--- Múltiplo de 3 e 5 ---');

let N1 = Number(prompt("Digite um número: "));

if (N1 % 3 === 0 && N1 % 5 === 0){
    console.log(`Número válido: ${N1}`);
}