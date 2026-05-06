const prompt = require('prompt-sync')();

console.log("--- Somatório de Grãos de Trigo no Tabuleiro de Xadrez ---");

let totalGraos = 0;
let i = 0;

while (i <= 64) {
    let graosNoQuadrado = 2 ** (i - 1);
    totalGraos += graosNoQuadrado;
    i++;
}

console.log(`O total de grãos de trigo no tabuleiro é: ${totalGraos}`); 