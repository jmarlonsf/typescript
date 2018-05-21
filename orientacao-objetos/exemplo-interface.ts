interface Pessoa{
    idade: number;
    sexo?: string;
}

function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: "João Marcos", idade: 25};

imprimirIdade(joaoMarcos);