const express =require('express')
const route = express.Router()
const cartControllers = require('../controllers/cartControllers.js')
const auth = require('../middleware/auth.js')
const isAdmin = require('../middleware/admin.js')

//route.get('/',auth,cartControllers.get)

//route.post('/',auth,isAdmin,cartControllers.create)
route.put('/',auth,cartControllers.update)
//route.delete('/',auth,isAdmin,cartControllers.remove)


module.exports = route