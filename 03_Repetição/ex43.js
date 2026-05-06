const prompt = require ('prompt-sync')();

console.log('--- Tabuada de um Número ---');

let N1 = Number(prompt("Digite um número para ver sua tabuada: "));

for (let i = 1; i <= 10; i++){
    console.log(`${N1} x ${i} = ${N1 * i} `);
}