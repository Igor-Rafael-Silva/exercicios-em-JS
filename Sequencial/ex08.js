const prompt = require('prompt-sync')();
 
console.log("---Cálculo do Volume de uma Caixa Retangular---");
 const comprimento = Number(prompt("Digite o comprimento da caixa: "));
 const largura = Number(prompt("Digite a largura da caixa: "));
 const altura = Number(prompt("Digite a altura da caixa: "));

 const volume = comprimento * largura * altura;
 console.log(`O volume da caixa retangular é: ${volume}`);  