// WHILE E IF ELSE

console.log(`::: Trabalhando com condicionais ::: \n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos disponíveis até o momento: ", listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
} else {
    console.log("Desculpe! Tivemos um erro");
}

// FOR

for (let cont = 0; cont < 3; cont++) {
    
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }

}