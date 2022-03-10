// const comida = 'Pizza';
// const liquido = new String('Água');
// const ano = new String(2018);

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
//   console.log(+preco.replace('R$ ', ''))
// })

// const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// const arrayItens = listaItens.split(' ');

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const htmlNovo = htmlArray.join('section');

//
// Exercícios
//

// Utilizando o foreach na array abaixo,
// some todos os valores de Taxa, e depois todos os valores de Recebimento

const transacoes = [
	{
		descricao: 'Taxa do Pão',
		valor: 'R$ 39',
	},
	{
		descricao: 'Taxa do Mercado',
		valor: 'R$ 129',
	},
	{
		descricao: 'Recebimento de Cliente',
		valor: 'R$ 99',
	},
	{
		descricao: 'Taxa do Banco',
		valor: 'R$ 129',
	},
	{
		descricao: 'Recebimento de Cliente',
		valor: 'R$ 49',
	},
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
	const valor = +item.valor.replace('R$ ', '');
	if (item.descricao.slice(0, 4) === 'Taxa') {
		taxaTotal += valor;
	} else if (item.descricao.slice(0, 4) === 'Rece') {
		recebimentoTotal += valor;
	}
});
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

transportesArray = transportes.split(';');

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

htmlNovo = html.split('span').join('a');
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(frase.length - 1));
console.log(frase.slice(-1));
console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoes2 = [
	'Taxa do Banco',
	'   TAXA DO PÃO',
	'  taxa do mercado',
	'depósito Bancário',
	'TARIFA especial',
];

let taxasTotal = 0;

transacoes2.forEach((item) => {
	// item = item.trim();
	// item = item.toLowerCase();
	// item = item.slice(0, 4)
	item = item.trim().toLowerCase().slice(0, 4);
	if (item === 'taxa') {
		taxasTotal++;
	}
});

console.log(taxasTotal);
