// fetch('pessoas.json')
//   .then(response => response.json())
//   .then(json => loadElements(json))

axios('pessoas.json')
  .then(response => loadElements(response.data))

function loadElements(json) {
  const result = document.querySelector('.result')
  const table = document.createElement('table')
  for (let people of json) {
    const tr = document.createElement('tr')
    
    let td = document.createElement('td')
    td.innerHTML = people.nome
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = people.idade
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = people.salario
    tr.appendChild(td)

    table.appendChild(tr)

  }
  result.appendChild(table)
}