const express = require('express')
const route = express.Router()
const homeController = require('./controllers/home')
const constactController = require('./controllers/contact')


route.get('/', homeController.homePage)
route.post('/', homeController.treatsPost)

route.get('/contact', constactController.contactPage)

module.exports = route;