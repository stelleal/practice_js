// var gatos = ['Midori', 'Gato', 'Banshee', 'Fifi'];

// for (var numero = 0; numero <= 10; numero++) {
// 	console.log(numero);
// }
// // Retorna de 0 a 9 no console
// var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
// for (var i = 0; i < videoGames.length; i++) {
// 	console.log(videoGames[i]);
// }

// for (let i = 0; i < gatos.length; i++) {
// 	console.log(gatos[i]);
// 	if (gatos[i] === 'Gato') {
// 		break;
// 	}
// }

// gatos.forEach(function(gato, n, array) {
//     console.log(gato, n, array);
// });

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < copaBrasil.length; i++) {
	console.log(`O Brasil ganhou a copa de ${copaBrasil[i]}.`);
}

console.log(' ');

copaBrasil.forEach(function (ano) {
	console.log(`O Brasil ganhou a copa de ${ano}.`);
});

console.log(' ');

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (let i = 0; i < frutas.length; i++) {
	console.log(`Eu gosto de ${frutas[i]}.`);
	if (frutas[i] === 'Pera') {
		break;
	}
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)