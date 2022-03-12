// console.log(Number.isInteger(10.000000000000001));
// console.log(Number.isInteger(10.0000000000000001));

// const preco = 2.99;
// preco.toFixed();// 3
// const carro = 1000.455;
// carro.toFixed(2)// 1000.46
// const preco2 = 1499.49;
// preco2.toFixed()// 1499

// Retorne um número aleatório
// entre 1050 e 2000

let numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numAleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);

console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let total = 0;

function limparPreco(preco) {
	preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
	preco = +preco.toFixed(2);
	return preco;
}

listaPrecos.forEach((preco) => {
	total += limparPreco(preco);
});

console.log(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
