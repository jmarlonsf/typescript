// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 29.99;

// string
let empresa: string = "AlgaWorks";

// TemplateStrings
let nome: string = "João";
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

// Arrays
let notas: number[] = [8, 6, 7, 9];

//tuple
let alunos: [string, number, string] = ["João", 10, "Matemática"];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Enum
enum Cor{Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

// Any
// Biblioteca de terceiros
// Migração de JAvaScript para Typescript
// Outro exemplo: array com vários tipos de dados
let algumValor: any = 4;
algumValor = "Agora é uma string";
algumValor = true;

// void
function alerta():void{
    //.. alert("Operação não permitida");
}

//null e undefined
let u: undefined = undefined;
let n: null = null;
// null e undefined são subtipos dos outros tipos
nome = undefined;
nome = null;