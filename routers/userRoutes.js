const express =require('express')
const route = express.Router()
const usersControllers = require('../controllers/usersControllers.js')

route.post('/login',usersControllers.login)

route.post('/register',usersControllers.register)

route.get('/logout',usersControllers.logout)

module.exports = route