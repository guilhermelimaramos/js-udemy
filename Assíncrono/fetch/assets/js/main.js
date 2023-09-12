
document.addEventListener('click', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if (tag === 'a') {
    e.preventDefault()
    loadPage(el)
  }
})

async function loadPage (element) {
  const href = element.getAttribute('href')

  try {
    const response = await fetch(href)
  
    if (response.status !== 200) throw new Error('Error 404');
  
    const html = await response.text()
    loadResult(html) 
  } catch(e) {
    console.warn(e)
  } 
}


function loadResult(response) {
  const result = document.querySelector('.result')
  result.innerHTML = response
}

