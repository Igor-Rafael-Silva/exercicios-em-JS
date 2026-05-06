const prompt = require('prompt-sync')();

console.log('--- Quadrados na Faixa de Valores ---')

for (let i = 15; i <= 200 ; i++) {   
    console.log(`O quadrado de ${i} é: ${i**2}`);
}