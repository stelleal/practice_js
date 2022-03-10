// function mostrarCarro() {
// 	var carro = 'Fusca';
// 	console.log(carro);
//   }

//   mostrarCarro(); // Fusca no console
//   console.log(carro); // Erro, carro is not defined

// if (false) {
// 	var carro = 'Fusca';
// 	// console.log(carro);
// }
// console.log(carro); // Fusca

// if (true) {
// 	let gato = 'Gato';
// }

// console.log(gato);

// {
// 	var carro = 'Fusca';
// 	let fruta = 'Uva';
// 	const animal = 'Gato';
//   }
//   console.log(carro); // Fusca
//   console.log(fruta); // fruta ano is not defined
//   console.log(animal); // animal ano is not defined

//   const mes = 'Dezembro';
// // mes = 'Janeiro'; // erro, tentou modificar o valor
// // const semana; // erro, declarou sem valor

// const data = {
//   dia: 28,
//   mes: 'Dezembro',
//   ano: 2018,
// }

// // data.dia = 29; // Funciona
// // data = 'Janeiro'; // erro

// Por qual motivo o código abaixo retorna com erros?
{
	var cor = 'preto';
	const marca = 'Fiat';
	let portas = 4;

	console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
	return x + dois;
}
function dividirDois(x) {
	return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
	console.log(numero);
}

const total = 10 * numero;
console.log(total);
