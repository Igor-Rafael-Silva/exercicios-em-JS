// Importa o módulo para leitura de dados no terminal
const prompt = require('prompt-sync')();

console.log("--- Conversor: Celsius para Fahrenheit ---");

// 1. Entrada de Dados
// Usamos Number() para garantir que o valor seja tratado como número e não texto
let celsius = Number(prompt("Digite a temperatura em graus Celsius: "));

// 2. Processamento
// Seguindo a fórmula: F = C * 9/5 + 32
let fahrenheit = (celsius * 9) / 5 + 32;

// 3. Saída de Dados
// Usamos Template Strings (com crases) para exibir o resultado
console.log(`${celsius}°C convertido para Fahrenheit é: ${fahrenheit}°F`);
