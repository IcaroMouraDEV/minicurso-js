// Variaveis e tipos de dados
var name = 'icaro' // não recomendado usar
const name2 = { name: 'icaro' }
let numero = 1

// undefined, null, string, number, object, array, boolean
let nome
let num = 1
let str = 'string'
let nul = null
let t = true
let f = false
const arr = ['str', 1]

// Estrutura de Repetição e Arrays
const obj = [{ name: 'cadu', age: 20 },{name: 'icaro'}, {name: 'jaco'}, {name: 'iago'}]
const array = [1, 3, 5, 7]
const array1 = [2, 4, 6, 8]
const arrayNumber = [array, array1]

for(let index = 0; index < obj.length; index += 1) {
  if (obj[index].name == 'cadu') {
    const { name, age } = obj[index]
    console.log(`nome: ${name}, idade: ${age}`)
  }
}

// Funções
function soma(n1, n2) {
  return n1 + n2
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calc = (arr) => arr.filter((num) => num % 2 != 0)

const subtracao = (n1, n2) => n1 - n2

// Objetos
const employee = {
  name: 'icaro',
  age: 20,
  cpf: '111.000.000-10',
  email: 'icaro@gmail.com',
  bolsista: true
}

const chavesNesc = ['name', 'age', 'cpf', 'email', 'bolsista']

const keys = Object.keys(employee)
const values = Object.values(employee)
const entries = Object.entries(employee)

console.log(chavesNesc.every((key) => keys.find((e) => e === key)))
console.log(employee)
console.log(keys)
console.log(values)
console.log(entries)

for(let number = 0; number <= 10; number += 1)

console.log(number);