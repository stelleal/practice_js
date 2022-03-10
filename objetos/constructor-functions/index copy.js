function Carro(marca, precoInicial) {
	const taxa = 1.2;
	const precoFinal = precoInicial * taxa;
	this.marca = 'Marca';
	this.preco = precoFinal;
	console.log(this);
}

const honda = new Carro('Honda', 2000);

