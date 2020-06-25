const names = ['Luis', 'Henrique', 'Maria', 'João', 'Pedro'];

const removed = names.splice(2, 4); //Remove primeiro qual vai ser o índice e a quantidade de elementos após ele.
// caso quiser remover do índice x até o final pode-se usar ex: var.splice(5, Number.MAX_VALUE);
// names.splice(3, 0, 'Jorge'); // Adiciona um índice a partir do índice informado.
// names.splice(3, 1, 'Jorge'); // Remove um elemento e adiciona no mesmo índice a partir do índice informado.
console.log(removed);