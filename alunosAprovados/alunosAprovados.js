// atividade 1

const alunos = [
{
    nome: "bruno",
    nota: 9,
},

{
    nome: "giovanna",
    nota: 10
},

{
    nome: "astrogildo",
    nota: 5
},

{
    nome: "wellington",
    nota: 6
}
]

function aprovaAlunos(arr, media) {
    let alunosAprovados = []

    for(let i = 0; i < arr.length; i++) {
        if (arr[i].nota >= media) {
            alunosAprovados.push(arr[i].nome)
        }
    }

    return alunosAprovados;
}

console.log(aprovaAlunos(alunos, 7));


    