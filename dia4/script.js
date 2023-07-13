// DESAFIO BONUS - Crie um site de fazer Pixel art
const board = document.querySelector('.board')
// const pixels = document.querySelectorAll('.pixel')
const colors = document.querySelectorAll('.color')
const createBtn = document.querySelector('.create')
const removeBtn = document.querySelector('.clean')

colors.forEach((color) => {
  color.addEventListener('click', ({ target }) => {
    const divColor = document.querySelector('.selected')
    
    divColor.className = 'color'
    target.className = 'color selected'
  })
})

// pixels.forEach((pixel) => {
//   pixel.addEventListener('click', ({ target }) => {
//     const divColor = document.querySelector('.selected')
//     let color;

//     if (divColor.value) {
//       color = divColor.value
//     } else {
//       color = window.getComputedStyle(divColor).getPropertyValue('background-color')
//     }

//     target.style.backgroundColor = color
//   })
// })

createBtn.addEventListener('click', () => {
  const lines = document.querySelector('.c-line').value
  const pixels = document.querySelector('.c-pixel').value

  board.innerHTML = ''

  for(let index = 0; index < Number(lines); index += 1) {
    const div = document.createElement('div')

    div.className = 'line'

    for(let indexY = 0; indexY < Number(pixels); indexY += 1) {
      const pixel = document.createElement('div')

      pixel.className = 'pixel'

      pixel.addEventListener('click', ({ target }) => {
        const divColor = document.querySelector('.selected')
        let color;

        if (divColor.value) {
          color = divColor.value
        } else {
          color = window.getComputedStyle(divColor).getPropertyValue('background-color')
        }

        target.style.backgroundColor = color
      })

      div.appendChild(pixel)
    }

    board.appendChild(div)
  }
})

removeBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = '#ffffff'
  })
})