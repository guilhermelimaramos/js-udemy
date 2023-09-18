const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  <p>Name: <input type="text" name="name"></p>
  <p>Lastname: <input type='text' name="lastname"></p>

  <button> Enviar </button>
  </form> `)
})

app.post('/', (req, res) => {
  //tudo que for no 'post' vai para o 'req.body'
  console.log(req.body)
  res.send(`Hello, ${req.body.name} ${req.body.lastname}`)
})

app.get('/test/:idUser?', (req, res) => {
  //params - recive in url - /12314/anything
  // /?name='Guilherme&lastname='Lima'
  console.log(req.params)
  console.log(req.query)
  res.send(req.query.name)

})

app.get('/contact', (req, res) => {
  res.send('Constact us')
})

app.listen(3000 , () => {
  console.log('Server running on port 3000!')
  console.log('Acsess: http://localhost:3000')
});

