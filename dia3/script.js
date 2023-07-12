// HOFS -> high orders functions
const employees = [{ name: 'icaro', age: 20 }, { name: 'cadu', age: 20 }, { name: 'xxxxxx', age: 18 }]
const products = [{ name: 'pc', category: 'tech' }, { name: 'fertilizer', category: 'agro' }]
const numArr = [4, 2, 5, 7, 12]

const employee = employees.find(({ name }) => name === 'xxx') // O PRIMEIRO
const employees20 = employees.filter(({ age }) => age >= 20) // Todos que realizarem a condição
const employees18 = employees.filter(({ age }) => age < 20)
const employees182 = employees.filter(({ age }) => age >= 18)
const employees30 = employees.filter(({ age }) => age >= 30)
const age = employees.every(({ age }) => age >= 18) // TODOS
const som = employees.some(({ age }) => age === 18) // Pelo menos UM
const techProduct = products.filter(({ category }) => category === 'tech')
const agroProduct = products.filter(({ category }) => category === 'agro')
const newArray = employees.map(({ name }) => ({ name }))

// employees.forEach((_item, index) => {
//   console.log(index)
//   return 'bla bla'
// })

// console.log(employee)
// console.log(employees182)
// console.log(age)
// console.log(som)
// console.log(employees.sort((a, b) => a.age - b.age))
// console.log(numArr)
// console.log(numArr.sort((a, b) => a - b))
// console.log(numArr.sort((a, b) => b - a))
// console.log(employees20)
// console.log(employees18)
// console.log(employees30)
// console.log(techProduct)
// console.log(agroProduct)
// console.log(newArray)

// LOCAL STORAGE
// ASYNC
const fetchData = async (id) => { 
  const crud = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // JSON
  const item = await crud.json() // covertendo em objeto

  const data = {
    id: item.id,
    order: item.order,
    name: item.name,
    sprite: item.sprites.front_default,
    types: item.types,
    weight: item.weight,
    height: item.height
  }

  localStorage.setItem(`${item.name}-${item.id}`, JSON.stringify(data))
}

const getData = async (key) => {
  const crud = localStorage.getItem(key)
  const data = await JSON.parse(crud)

  console.log(data)
}

fetchData(4)
getData(`charmander-4`)
// ASYNC
const fetchData2 = (id) => { 
  const item = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((value) => value.json())

  const data = {
    id: item.id,
    order: item.order,
    name: item.name,
    sprite: item.sprites.front_default,
    types: item.types,
    weight: item.weight,
    height: item.height
  }

  localStorage.setItem(`${item.name}-${item.id}`, JSON.stringify(data))
}

fetchData(257)
