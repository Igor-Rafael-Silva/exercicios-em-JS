const prompt = require('prompt-sync')();

console.log("---Cálculo do Novo Salário com Aumento---");
const salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário: "));
const porcent = parseFloat(prompt("Digite a porcentagem atual do funcionário: "));
const aumento = salarioAtual * porcent / 100;
const novoSalario = salarioAtual + aumento; 
console.log(`O novo salário do funcionário, após um aumento de ${porcent}, é: R$ ${novoSalario}`);
