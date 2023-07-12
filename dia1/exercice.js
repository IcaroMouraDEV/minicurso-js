// EXERCICIO 1 - Crie uma estrutura de repetição que exiba os numeros de 1 a 10 na tela
for(index = 1; index <= 10; index += 1) { console.log(index) }

// EXERCICIO 2 - Crie 4 funções sobre as operações matematicas (+, -, *, /)
const sum = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2
const mul = (n1, n2) => n1 * n2
const div = (n1, n2) => n1 / n2

// EXERCICIO 3 - Crie 1 função que retorna um objeto, com as informações de um animal -> inputs (nome, especie, idade)
const pet = (name, specie, age) => ({ name, specie, age })

// EXERCICIO 4 - Crie uma função que recebe um objeto, e retorna um array com suas chaves e valores
const objData = (obj) => Object.entries(obj)
