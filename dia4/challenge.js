// DESAFIO 1 - Crie uma função que recebe um array de numeros, e retorna a soma destes numeros, se algum item do array não for numero, deve-se retornar a mensagem = 'Todos os items do array tem que ser numeros', caso o array venha sem nenhum elemento, deve-se retornar a mensagem = 'Array vazio'
const sumNums = (numArr) => {
  if(numArr.length === 0) return 'Array vazio'
  const val = numArr.every((num) => typeof num === 'number')
  if (!val) return 'Todos os items do array tem que ser numeros'

  return numArr.reduce((acc, num) => acc + num, 0)
}

console.log(sumNums([1, 2, 3, 4, 5, 6]))
