
console.log("Atribuição de Variáveis");

const idade = 24;
const primeiroNome = "Gisele";
const sobrenome = "Sodré";

console.log(primeiroNome + sobrenome); //Vai ficar tudo junto
console.log(primeiroNome, sobrenome); //Uma opção de inclusão de espaço
console.log(primeiroNome + " " + sobrenome); //Outra opção de inclusão de espaço

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);  

let contador = 0;
contador = contador +1;

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto); //Com a variável como uma constante, ela não se alterará depois em uma sobrescrição