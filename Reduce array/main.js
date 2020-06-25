// Some todos os números (reduce)
// Retorne um array com a some de tos ímpares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice) => {
    acumulador += valor;
    // console.log(acumulador, valor);
    return acumulador;
}, 0);

const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 !== 0) acumulador += valor;
    return acumulador;
}, 0);

const pessoas = [
    { nome: 'Luis', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 82},
    { nome: 'Wallace', idade: 47},
];

const PessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log("Valor total:", total);
console.log("Pares:", pares);
console.log("Pessoa de mais idade:", PessoaMaisVelha);