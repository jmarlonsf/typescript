const precos = ['10', '23', '19'];

/*
const precosEmReais = precos.map(function(preco){
    return 'R$ ' + preco + ',00';
});
*/

const acimaDe20 = precos
        .filter(preco => preco > 20)
        .map(preco => `R$${preco},00`); // => Template string ` `

console.log(acimaDe20);