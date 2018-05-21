// diferença entre var, let e const

// var -> Hoisting
function iniciarTime(iniciaJogo:boolean){
    var nome: string = 'Messi e amigos';
    let cidade;
    if(iniciaJogo){
        cidade = 'em São Paulo';
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false); 

//let -> não utiliza hoisting
//const -> uma contante não muda o valor.
