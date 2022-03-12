// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
	return {
		titulo: curso.children[0].innerHTML,
		descricao: curso.children[1].innerHTML,
		aulas: curso.children[2].innerHTML,
		horas: curso.children[3].innerHTML,
	};
});

const objetoCursos2 = arrayCursos.map((curso) => {
	const titulo = curso.querySelector('h1').innerText;
	const descricao = curso.querySelector('p').innerText;
	const aulas = curso.querySelector('.aulas').innerText;
	const horas = curso.querySelector('.horas').innerText;
	return {
		titulo,
		descricao,
		aulas,
		horas,
	};
});

console.log(objetoCursos);
console.log(objetoCursos2);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter((num) => num > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const temBaixo = instrumentos.some((instrumento) => {
	return instrumento === 'Baixo';
});

// Retorne o valor total das compras
const compras = [
	{
		item: 'Banana',
		preco: 'R$ 4,99',
	},
	{
		item: 'Ovo',
		preco: 'R$ 2,99',
	},
	{
		item: 'Carne',
		preco: 'R$ 25,49',
	},
	{
		item: 'Refrigerante',
		preco: 'R$ 5,35',
	},
	{
		item: 'Quejo',
		preco: 'R$ 10,60',
	},
];

const valorTotal = compras.reduce((acc, atual) => {
	const precoLimpo = +atual.preco.replace('R$ ', '').replace(',', '.');
	return acc + precoLimpo;
}, 0);
