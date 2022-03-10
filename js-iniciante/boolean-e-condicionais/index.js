// var possuiGatos = true;

// if(possuiGatos) {
//   console.log('Miau :3');
// } else {
//   console.log('Sem gatos :(');
// }
// // retorna Possui Graduação e não executa o else

// var possuiUmGato = true;
// var possuiGatos = false;

// if (possuiGatos) {
// 	console.log('Vários gatos');
// } else if (possuiUmGato) {
// 	console.log('Um gatinho');
// } else {
// 	console.log('Sem gatos');
// }
// // retorna Possui Graduação, mas não possui doutorado

// var gataChata = ' ';
// console.log(!!gataChata);

// var corFavorita = 'Rosa';

// switch (corFavorita) {
//   case 'Azul':
//     console.log('Olhe para o céu.');
//     break;
//   case 'Vermelho':
//     console.log('Olhe para rosas.');
//     break;
//   case 'Amarelo':
//     console.log('Olhe para o sol.');
//     break;
//   default:
//     console.log('Feche os olhos');
// }

// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 22;
var idadeNicollas = 23;
var comparacaoIdades = minhaIdade > idadeNicollas;
console.log(comparacaoIdades);
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (minhaIdade > idadeNicollas) {
	console.log('Eu sou mais velha.');
} else if (minhaIdade === idadeNicollas) {
	console.log('Idade igual.');
} else {
	console.log('Sou mais nova.');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2; //
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
	!!nome,
	!!idade,
	!!possuiDoutorado,
	!!empregoFuturo,
	!!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var totalHabitantes = china > brasil;

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
	console.log('Verdadeiro');
} else {
	console.log('Falso');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
	console.log('Gato' && 'Cão');
} else {
	console.log('Falso');
}
