const nomeCompleto = String(prompt('Qual o seu nome Completo'));
const idade = Number(prompt('Qual a sua idade?'));
const cidade = String(prompt('Qual a cidade que voce mora?'));
const hobby = prompt('Qual o seu hobbie?');
const temCnh = confirm('Você tem CNH?');
const filhos = prompt('Quantos filhos voce tem?');
const cargoAtual = prompt('Qual o seeu Cargo Atual?');
const salario = Number(prompt('Qual o valor do seu salario?'));
const comissao = confirm('Você recebe comissão');
const anoDeAdmissao = Number(prompt('Qual ano voce entrou na empresa?'));

console.log(`Meu Hobbie favoito é ${nomeCompleto}, tenho ${idade} anos en moro em ${cidade}.`);
console.log(`_Meu hobbie faaavorito é ${hobby}`);
console.log(`Tenho CNH ${temCnh}`);
console.log(`Numero de Filhos: ${filhos}`);
console.log(`Atualmente trabalho no cargo de: ${cargoAtual}
e recebo um salario de R$ ${salario}.`);
console.log(`Recebo comissão ${comissao}`);
console.log(`Fui a admitido na empresa no ano de ${anoDeAdmissao}`);
console.log(`Tipo de variavel 'idade': ${typeof idade}`);
console.log(`Tipo de variavel 'salario': ${typeof salario}`);
console.log(`Tipo de variavel 'temCnh': ${typeof temCnh}`);
