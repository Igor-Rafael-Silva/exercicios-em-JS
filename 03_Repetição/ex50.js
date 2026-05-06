const prompt = require('prompt-sync')();

console.log("--- Sequência de Finonacci ---");

let N1 = 0;
let N2 = 1;

console.log(`Primeiro termo = ${N1}
Segundo termo = ${N2}`);

for(let i=3; i <= 15; i++){
	let proximo_termo = N1 + N2;
	console.log(`${N1} + ${N2} = ${proximo_termo}`);
	N1 = N2;
	N2 = proximo_termo;
}