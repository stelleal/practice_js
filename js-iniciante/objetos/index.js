// var pessoa = {
// 	nome: 'Stella',
// 	sobrenome: 'Leal',
// 	idade: 22,
// 	possuiGatos: true,
// };

// console.log(pessoa.sobrenome);

// var quadrado = {
// 	lados: 4,
// 	area(lado) {
// 		return lado * lado;
// 	},
// 	perimetro(lado) {
// 		return this.lados * lado;
// 	},
// };

// quadrado.lados; // 4
// quadrado.area(5); // 25
// quadrado.perimetro(5); // 20

// var height = 120;
// var menu = {
// 	width: 800,
// 	height: 50,
// 	backgroundColor: '#84E',
// 	metadeHeight() {
// 		return this.height / 2;
// 	},
// };

// var bg = menu.backgroundColor; // '#84E'

// menu.color = 'blue';

// menu.esconder = function () {
// 	return console.log('Escondi');
// };

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// var stella = {
// 	nome: 'stella',
// 	sobrenome: 'leal',
// 	idade: 22,
// 	temGatos: true,
// };

// // Crie um método no objeto anterior, que mostre o seu nome completo
// stella.nomeCompleto = function () {
// 	return `${this.nome} ${this.sobrenome}`;
// };

// // Modifique o valor da propriedade preco para 3000
// var carro = {
// 	preco: 1000,
// 	portas: 4,
// 	marca: 'Audi',
// };

// carro.preco = 3000;

// // Crie um objeto de um cachorro que represente um labrador,
// // preto com 10 anos, que late ao ver um homem

// var cachorro = {
// 	raca: 'labrador',
// 	cor: 'preto',
// 	idade: 10,
// 	latir(pessoa) {
// 		if (pessoa === 'homem') {
// 			return 'Latir';
// 		} else {
// 			return 'Nada';
// 		}
// 	},
// };
// var nome = 'Stella';
// var altura = 1.80;

// var btn = document.querySelector('.btn');

// btn.classList.add('azul') // adiciona a classe azul
// btn.innerText; // 'Clique'
// btn.addEventListener('click', function() {
//   console.log('Clicou')
// })

// nomeie 3 propriedades ou métodos de strings
var nome = 'nome';

nome.length;
nome.replace('me', 'mbre');
nome.charAt(2);

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn');

btn.innerHTML;
btn.style.color = "blue";
btn.parentNode;
btn.classList.add('azul')
btn.className;

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
