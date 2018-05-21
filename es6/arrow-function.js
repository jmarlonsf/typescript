const precos = ['10', '23', '19'];

/*
const precosEmReais = precos.map(function(preco){
    return 'R$ ' + preco + ',00';
});
*/
const precosEmReais = precos.map(preco => `R$${preco},00`);
console.log(precosEmReais);

const acimaDe20 = precos
        .filter(preco => preco > 20)
        .map(preco => `R$${preco},00`);

console.log(acimaDe20);