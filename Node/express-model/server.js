require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    //console.log('Connect to Data Base')
    app.emit('Done')
  })
  .catch(e => console.log('Error:', e))

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true}))

app.use(express.static(path.resolve((__dirname), 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//our own middlewares
app.use(middlewareGlobal)
app.use(routes)

app.on('Done', () => {
  app.listen(3000 , () => {
    console.log('Server running on port 3000!')
    console.log('Acsess: http://localhost:3000')
  });
})


