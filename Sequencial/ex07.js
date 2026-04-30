const prompt = require('prompt-sync')();

console.log("---Adição e Multiplicação de Quatro Números Inteiros---")

const input = prompt('Digite quatro números inteiros separados por espaço: ');
const valores = input.split(' ').map(Number);

if (valores.length !== 4 || valores.some(isNaN)) {
  console.log('Por favor, digite exatamente 4 números válidos.');
} else {
  const [a, b, c, d] = valores;

  console.log('\nAdições:');
  console.log(`${a}+${b}=${a + b}`);
  console.log(`${a}+${c}=${a + c}`);
  console.log(`${a}+${d}=${a + d}`);
  console.log(`${b}+${c}=${b + c}`);
  console.log(`${b}+${d}=${b + d}`);
  console.log(`${c}+${d}=${c + d}`);

  console.log('\nMultiplicações:');
  console.log(`${a}x${b}=${a * b}`);
  console.log(`${a}x${c}=${a * c}`);
  console.log(`${a}x${d}=${a * d}`);
  console.log(`${b}x${c}=${b * c}`);
  console.log(`${b}x${d}=${b * d}`);
  console.log(`${c}x${d}=${c * d}`);
}