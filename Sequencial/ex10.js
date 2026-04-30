const  prompt = require('prompt-sync')();

 console.log("---Cálculo da Diferença entre Dois Números Inteiros---");

  const numero1 = Number(prompt('insira o primeiro valor numerico inteiro; '));
  const numero2 = Number(prompt('insira o segundo numero inteiro: '));

   const total = numero2 - numero1

   console.log(`A diferença entre os dois números é: ${total}`);