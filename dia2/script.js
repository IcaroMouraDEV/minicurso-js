// const element = document.getElementById('elemento')
// const element1 = document.getElementsByClassName('pokemon')
// const element2 = document.querySelector('.pokemon')
// const element3 = document.querySelectorAll('.pokemon')

// console.log(element)
// console.log(element2.innerText)
// console.log(element3)

// for(let index = 0; index < element1.length; index += 1) {
//   console.log(element1[index].children[0].innerText)
// }
const parent = document.querySelector('.main-wrapper')

const createPokemon = (name) => {
  const element = document.createElement('p')

  element.className = 'pokemon risk'
  element.innerText = name

  parent.appendChild(element)
}

const removePokemon = (name) => {
  const pokemons = document.querySelectorAll('.pokemon')
  const [pokemon] = [...pokemons].filter((element) => element.innerText === name)

  parent.removeChild(pokemon)
}

// createPokemon('Blaziken')
// createPokemon('Pikachu')
// createPokemon('Charizard')
// createPokemon('Blastoise')
// createPokemon('Infenape')

// removePokemon('Blastoise')
// removePokemon('Pikachu')

const button = document.querySelector('.toggle-theme')

button.addEventListener('click', ({ target }) => {
  const main = document.querySelector('.main').parentNode

  if (main.className.includes('light')) {
    main.className = 'night'
    target.innerText = 'Light'
  } else {
    main.className = 'light'
    target.innerText = 'Night'
  }
})

// button.addEventListener('click', () => {
//   console.log('APERTOU O BOTÃO')
  
//   const b = 'texto'
// })

const fetchData = async () => {
  const crud = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=9') // JSON
  const { results: data } = await crud.json() // covertendo em objeto

  data.forEach(({ name }) => {
    createPokemon(name)  
  });
  console.log(data);
}

console.log(fetchData())

const qualquer = () => {
  console.log('teste assincronicidade')
}

// qualquer()
