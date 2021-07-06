console.log("Conversão de Tipos");

console.log("ano " + 2020);

console.log("2" + "2"); //Para realizar essa soma, se faz necessária a conversão do texto para número
console.log(parseInt("2") + parseInt("2")); 

console.log("10" / "2"); //Diferente da soma, na divisão não é necessário converter o texto para número com o parseInt
console.log("Gisele" / "2"); //Aqui, obviamente não vai dar certo: Not a Number
console.log("7" / "2");

console.log(6,5); //Vírgula não funciona. As casas decimais são divididas com ponto (6.5)