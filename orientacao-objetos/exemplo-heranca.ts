class Funcionario{
    nome: string;
    salario: number;

    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
    //valor default para parâmetros
    pagarImposto(taxa: number = 7.5){
        console.log(`Pagando ${this.salario * taxa / 100} de imposto`);
    }
}

class Secretario extends Funcionario{

}

class Executivo extends Funcionario{
    pagarImposto(taxa: number = 27.5){
        console.log(`Executivo paga mais`);
        super.pagarImposto(taxa);
    }
}

let sarah: Secretario = new Secretario("sara", 2000);
sarah.pagarImposto();

let jorge: Executivo = new Executivo("Jorge", 30000);
jorge.pagarImposto();