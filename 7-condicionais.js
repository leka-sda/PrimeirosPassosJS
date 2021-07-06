console.log(`::: Trabalhando com condicionais :::`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos disponíveis até o momento: ", listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("::: Análise de compra :::");
//     console.log("Comprador maior de idade: ");
//     listaDeDestinos.splice(1, 1); //remover um item
//     console.log(listaDeDestinos);
// } else if (estaAcompanhada) {
//     console.log("::: Análise de compra :::");
//     console.log("Comprador menor de idade, porém, acompanhado: ");
//     listaDeDestinos.splice(1, 1); //remover um item
//     console.log(listaDeDestinos);
// } else {
//     console.log("Compra não autorizada. Comprador menor de idade");
// }

//ENXUGANDO O IF
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("::: Análise de compra :::");
    console.log("Boa viagem! \n");
    listaDeDestinos.splice(1, 1); //remover um item
} else {
    console.log("Compra não autorizada. Comprador menor de idade e não acompanhado \n");
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
} else {
    console.log("Lamentamos, mas você não poderá embarcar.");
}

console.log("Destinos disponíveis até o momento: ", listaDeDestinos);


//CONFIRA ALGUNS OPERADORES LÓGICOS
// console.log(idadeComprador > 18); 
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);