// JEITO 1 - NADA EFICIENTE (deixei todo como comentário)
console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);


//JEITO 2 - UM TANTINHO MELHOR, USANDO ARRAYS
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Brasília`

); 

listaDeDestinos.push(`Curitiba`) //para adicionar itens na lista
console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); // apagar item da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);