var quantidade = 20;
//quantidade = ""; -- não compila
var x = [1, 2, null];
//x[0] = true; -- não compila
// Contextual Typing
window.onmousedown = function (evento) {
    console.log(evento.button); // Ok
    //console.log(evento.buton); // Não compila
};
