
console.log("Atribuição de Variáveis");

const idade = 24;
const nome = "Gisele";
const sobrenome = "Sodré";

console.log(nome + sobrenome); //Vai ficar tudo junto
console.log(nome, sobrenome); //Uma opção de inclusão de espaço
console.log(nome + " " + sobrenome); //Outra opção de inclusão de espaço

console.log(`Meu nome é ${nome} ${sobrenome}`);  

nome = nome + sobrenome;
console.log(nome); //Com a variável como uma constante, ela não se alterará depois em uma sobrescrição