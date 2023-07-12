// EXERCICIO 1 - crie uma função para Criar tarefas(li) de uma lista não ordenada(ul), eles devem possuir a classe (item)
const parent = document.querySelector('.main-list')
const btn = document.querySelector('.form-btn')
const button = document.querySelector('.toggle-theme')

const createTask = () => {
  const task = document.querySelector('.task-input')
  const li = document.createElement('li')

  li.innerText = task.value
  li.className = 'task'
  task.value = ''

  parent.appendChild(li)
  addEvent(li)
}

btn.addEventListener('click', createTask)

// EXERCICIO 2 - crie um Evento para Trocar o tema da página(click)
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

const addEvent = (li) => {
  // EXERCICIO 3 - crie um Evento para riscar um elemento se for clicado(click) uma vez
  li.addEventListener('click', ({ target }) => {
    if (target.className.includes('risk')) {
      target.className = 'task'
    } else {
      target.className = 'task risk'
    }
  })
  
  // EXERCICIO bonus - crie uma Evento para Remover tarefas(li) de uma lista não ordenada(ul) se for clicado duas vezes e estiver riscado (dblclick)
  li.addEventListener('dblclick', ({ target }) => {
    if (target.className.includes('risk')) {
      parent.removeChild(li)
    }
  })
}
