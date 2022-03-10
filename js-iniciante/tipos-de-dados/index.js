var nome = 'Stella',
	idade = 22,
	possuiFacul = false,
	time,
	comida = null,
	simbolo = Symbol(),
	novoObjeto = {};
console.log(
	typeof nome,
	typeof idade,
	typeof possuiFacul,
	typeof time,
	typeof comida,
	typeof simbolo,
	typeof novoObjeto
);

console.log('JavaScript é "super" fácil');

// 'JavaScript é "super" fácil';
// "JavaScript é 'super' fácil";
// "JavaScript é \"super\" fácil";
// `JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

var gatos = 2;
var frase1 = 'Eu tenho ' + gatos + ' gatos.';
var frase2 = `Eu tenho ${gatos} gatos.`;

console.log(frase1, frase2);

// Declare uma variável contendo uma string
var gato1 = 'Midori';

// Declare uma variável contendo um número dentro de uma string
var gatoIdade = '7';

// Declare uma variável com a sua idade
var idadeNovamente = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = 'Stella',
	meuSobrenome = 'Leal';
var meuNomeCompleto1 = meuNome + ' ' + meuSobrenome;
var meuNomeCompleto2 = `${meuNome} ${meuSobrenome}`;
console.log(meuNomeCompleto1, meuNomeCompleto2);

// Coloque a seguinte frase em uma variável: It's time
var tempo = 'It\'s time';
console.log(tempo)

// Verifique o tipo da variável que contém o seu nome
console.log(typeof meuNome);
