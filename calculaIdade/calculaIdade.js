function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Bruno',
	idade: 21,
};

const pessoa2 = {
	nome: 'Giovanna',
	idade: 20,
};

console.log(calculaIdade.call(pessoa1, 40));
