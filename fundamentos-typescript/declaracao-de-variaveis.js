// diferença entre var, let e const
// var -> Hoisting
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    var cidade;
    if (iniciaJogo) {
        cidade = 'em São Paulo';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
//let -> não utiliza hoisting
//const -> uma contante não muda o valor.
