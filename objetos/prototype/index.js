// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
	return this.nome + ' ' + this.sobrenome;
};

const ana = new Pessoas('Ana', 'Maria', 10);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String


