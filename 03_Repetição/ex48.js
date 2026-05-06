const prompt = require('prompt-sync')();

console.log("--- Potências de 3 ---");

let expoente = 0;

while(expoente <= 15){
	let potencia = 3**expoente;
	console.log(`3^${expoente} = ${potencia}`)
	expoente = expoente + 1;}