const meusNumeros = [3, 28, 9, 7, 1];

function verificaArray(arr, num) {

    try {
        if (!arr && !num) throw new ReferenceError("Erro de Referência");

        if (typeof arr !== 'object') throw new TypeError("Arr não é do tipo Array!");

        if (typeof num !== 'number') throw new TypeError("Num não é do tipo Número!");

        if (arr.length !== num) throw new RangeError("Tamanho inválido!");

        return arr;

    }

    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um ReferenceError")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este é um TypeError")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este é um RangeError")
            console.log(e.message)
        }

        else {
            console.log("Erro com tipo não declarado" + e);
        }
    }
}

console.log(verificaArray(meusNumeros, 5));