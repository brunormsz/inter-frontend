// metodo 1
function verificaPalindromo(string) {
    if (!string) return "string inexistente"; 
    /* para verificar se é uma string, se não for o return ira sair
    da função */
    
    return string.split("").reverse().join("") === string
    /* o split ira dividir todas as letras em arrays, o reverse ira inverter
    a ordem das letras, e o join ira juntar todas as letras e o === sera para conferir
    se as letras ao contrario são iguais a string original */
}

// metodo 2

function varificaPalindromo2(string) {
	if (!string) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('amma');

        // exemplo com string amma
        // o for serve para fazer o loop, enquanto o i for menor que metade do 
        // tamanho da string, o loop continuará funcionando
        // no if, a letra a será o [0], o string.lenght - 1 - i é (4 - 1 - 0)
        // que será o [3] que também é a letra a então é true, então o loop
        // continua o próximo é a letra m [1], o string.length - 1 - i (4 - 1 - 1)
        // que será [2] que também é a letra m, então é true, o loop irá parar pois
        // o i será 2 e não será menor que a metade do string.lenght que é 2
