function comparaNumeros(num1, num2) {

const primeiraFrase = criaPrimeiraFrase(num1, num2);
const segundaFrase = criaSegundaFrase(num1, num2);

return `${primeiraFrase} ${segundaFrase}`

}
function criaPrimeiraFrase(num1, num2) {
    
    let primeiraFrase = `Os numeros ${num1} e ${num2}`
    let saoNao = "nao"

    if (num1 === num2) {
        saoNao = ""
    }

    return `${primeiraFrase} ${saoNao} sao iguais.`
}

function criaSegundaFrase(num1,num2) {

    const soma = num1 + num2;
    let compara10 = "menor";
    let compara20 = "menor";
    

        if (soma > 10) {
            compara10 = "maior";
        }


        if (soma > 20) {
            compara20 = "maior";
        }

        let segundaFrase = `Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20. `

        return `${segundaFrase}`
}

    

console.log(comparaNumeros(2,14));
