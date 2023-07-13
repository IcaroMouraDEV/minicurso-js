// DESAFIO BONUS - Crie um site de fazer Pixel art
const pixels = document.querySelectorAll('.pixel')
const colors = document.querySelectorAll('.color')
const btn = document.querySelector('.clean')

colors.forEach((color) => {
  color.addEventListener('click', ({ target }) => {
    const divColor = document.querySelector('.selected')
    
    divColor.className = 'color'
    target.className = 'color selected'
  })
})

pixels.forEach((pixel) => {
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
})

btn.addEventListener('click', () => {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = '#ffffff'
  })
})