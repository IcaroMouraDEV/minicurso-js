const employees = []

const makeEmployee = (name, age, cpf, email) => {
  if (!name) return 'parametro nome vazio'

  const employee = {
    name,
    age,
    cpf,
    email
  }

  employees.push(employee)
}

makeEmployee('iago', 19, '000.000.000-00', 'iago@gmail.com')
makeEmployee('icaro', 20, '111.000.000-10', 'icaro@gmail.com')
makeEmployee('cadu', 20, '999.000.000-10', 'cadu@gmail.com')
console.log(makeEmployee('', 20, '999.000.000-10', 'cadu@gmail.com'))

console.log(employees)
