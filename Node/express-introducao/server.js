const express = require('express')
const { chownSync } = require('fs')
const app = express()

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Name: <input type="text" name="name">
  <button> Enviar </button>
  </form> `)
})

app.post('/', (req, res) => {
  res.send(`Form recived!`)
})

app.get('/contact', (req, res) => {
  res.send('Constact us')
})

app.listen(3000 , () => {
  console.log('Server running on port 3000!')
  console.log('Acsess: http://localhost:3000')
});

