// DESAFIO BONUS - Crie um site de fazer Pixel art
const board = document.querySelector('.board')
const colors = document.querySelectorAll('.color')
const createBtn = document.querySelector('.create')
const removeBtn = document.querySelector('.clean')
const returnBtn = document.querySelector('.return')

colors.forEach((color) => {
  color.addEventListener('click', ({ target }) => {
    const divColor = document.querySelector('.selected')
    
    divColor.className = 'color'
    target.className = 'color selected'
  })
})

createBtn.addEventListener('click', async () => {
  const lines = document.querySelector('.c-line')
  const pixels = document.querySelector('.c-pixel')

  board.innerHTML = ''

  localStorage.setItem('last-pixel', JSON.stringify([]))
  localStorage.removeItem('board')

  for(let index = 0; index < Number(lines.value); index += 1) {
    const div = document.createElement('div')

    div.className = 'line'

    for(let indexY = 0; indexY < Number(pixels.value); indexY += 1) {
      const pixel = document.createElement('div')

      pixel.className = 'pixel'
      pixel.id = `${index}-${indexY}`

      const pixelData = {
        l: index,
        p: indexY,
        c: 'rgb(255, 255, 255)',
      }
      
      const crud = localStorage.getItem('board')
      
      if (crud) {
        const data = await JSON.parse(crud)
        localStorage.setItem('board', JSON.stringify([...data, pixelData]))
      } else {
        localStorage.setItem('board', JSON.stringify([pixelData]))
      }

      pixel.addEventListener('click', async ({ target }) => {
        const divColor = document.querySelector('.selected')
        let color;

        const crud = localStorage.getItem('board')
        const data = await JSON.parse(crud)
        
        if (divColor.value) {
          color = divColor.value
        } else {
          color = window.getComputedStyle(divColor).getPropertyValue('background-color')
        }

        const prevC = window.getComputedStyle(target).getPropertyValue('background-color');
        const crudL = localStorage.getItem('last-pixel')
        const dataL = await JSON.parse(crudL)
        localStorage.setItem('last-pixel', JSON.stringify(
          [
            ...dataL,
            data.find((item) => item.l === index && item.p === indexY),
          ]
        ))

        localStorage.setItem('board', JSON.stringify(data.map((item) => {
          if (item.l === index && item.p === indexY) {
            item.c = prevC
          }
          
          return item
        })))

        validateEvent(document.querySelector('.return'))

        target.style.backgroundColor = color
      })

      div.appendChild(pixel)
    }

    board.appendChild(div)
  }

  lines.value = ''
  pixels.value = ''
})

removeBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = '#ffffff'
  })
})

returnBtn.addEventListener('click', async ({ target }) => {
  const pixels = document.querySelectorAll('.pixel')
  const crud = localStorage.getItem('last-pixel')
  const data = await JSON.parse(crud)
  const x = data.length - 1

  const pixel = [...pixels].find((pixel) => pixel.id === `${data[x].l}-${data[x].p}`)

  pixel.style.backgroundColor = data[x].c

  localStorage.setItem('last-pixel', JSON.stringify(data.slice(0, -1)))
  validateEvent(target)
})

const validateEvent = async (target) => {
  const crud = localStorage.getItem('last-pixel')
  const data = await JSON.parse(crud)

  if (data.length === 0) {
    target.disabled = true
  } else {
    target.disabled = false
  }
}
