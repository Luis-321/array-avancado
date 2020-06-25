//Alterar a última string ...pega todo o elemento do array
// const names = ['Luis', 'João', 'Maria', 'Rosária', 'Malária', 'Podre', 'Não Toma Banho Siqueira'];

// const news = names.slice(1, 4); //Pega os índices do array e exibe de onde até...!
// const news - names.slice(1, -2) // inciou no índice 1 e removeu 2 índices após o  índice 2.

// const news = [...names];

// const removed = news.pop(); //Remove o final elemento do array e retorna  o elemento removido, nsse caso está retornando para uma variável este elmeneto removido.
// names.shift(); //Remove o começo elemento do array.
// names.push('Pedro'); //adiciona um elemento no índice final do array.
// names.unshift(); //Adiciona um elemento no inicio do array.

// console.log(names);
// console.log(news);
// console.log(news, removed);
// console.log(names.length); //Pega todo o elemento
// console.log(news);

// var.split(); Transforma String em array.
// var.join(); Une todos os valores de um array e transforma em uma string...

const nome = 'Luis Henrique Mendes Farias';
const nomes = nome.split(' ');
console.log(nomes);