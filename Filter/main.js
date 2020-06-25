//Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luis', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nPessoasComCincoLetras = pessoas.filter(obj => obj.nome.length >= 5);
const IdadeMaior50 = pessoas.filter(obj => obj.idade > 50);
const FimNomeLetraA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

const numbers = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const filtersNumbers = numbers.filter(value => value > 13);

console.log(filtersNumbers);
console.log(nPessoasComCincoLetras);
console.log(IdadeMaior50);
console.log(FimNomeLetraA);