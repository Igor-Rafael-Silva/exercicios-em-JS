const prompt = require("prompt-sync")();

console.log("--- Somatório da Fatorial de Quinze Valores ---");

let somatorio = 0;

for(let valor = 1; valor <= 15; valor++){
    let fatorial = 1;
    for(let i = 1; i <= valor; i++){
        fatorial = fatorial * i;}
    somatorio = somatorio + fatorial;
}

console.log(`O somatório é: ${somatorio}`);