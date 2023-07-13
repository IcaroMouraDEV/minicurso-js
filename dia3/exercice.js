// EXERCICIO 1 - crie uma função para Criar tarefas(li) de uma lista não ordenada(ul), eles devem possuir a classe (item)
const parent = document.querySelector('.main-list')
const btn = document.querySelector('.form-btn')
const toggle = document.querySelector('.toggle-theme')

btn.addEventListener('click', () => {
  const task = document.querySelector('.task-input')
  const li = document.createElement('li')

  li.className = 'item'
  li.innerText = task.value
  task.value = ''

  parent.appendChild(li)
  addEvent(li)
})

// EXERCICIO 2 - crie um Evento para Trocar o tema da página(click)
toggle.addEventListener('click', ({ target }) => {
  const main = document.querySelector('.main').parentNode

  if (main.className === 'night') {
    main.className = 'light'
    target.innerText = 'Night'
  } else {
    main.className = 'night'
    target.innerText = 'Light'
  }
})

const addEvent = (li) => {
  // EXERCICIO 3 - crie um Evento para riscar um elemento se for clicado(click) uma vez
  li.addEventListener('click', ({ target }) => {
    if (target.className.includes('risk')) {
      target.className = 'item'
    } else {
      target.className = 'item risk'
    }
  })

  // EXERCICIO bonus - crie um Evento para Remover tarefas(li) de uma lista não ordenada(ul) se for clicado duas vezes e estiver riscado (dblclick)
  li.addEventListener('dblclick', ({ target }) => {
    if (target.className.includes('risk')) {
      parent.removeChild(li)
    }
  })
}

// Exercicio bonus - salvar as tarefas no localStorage (para não perde-los quando att a pagina)
