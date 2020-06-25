//Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adiciona uma chave id em cada objeto

const pessoas = [
    { nome: 'Luis', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => { return { idade: obj.idade }});
const ids = pessoas.map((obj, indice) => { obj.id = indice; return obj; });

console.log(nomes);
console.log(idades);
console.log(ids);