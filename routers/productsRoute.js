const express =require('express')
const route = express.Router()
const productControllers = require('../controllers/productControllers.js')
const auth = require('../middleware/auth.js')
const isAdmin = require('../middleware/admin.js')

route.get('/',auth,productControllers.get)

route.post('/',auth,isAdmin,productControllers.create)
route.put('/',auth,isAdmin,productControllers.update)
route.delete('/',auth,isAdmin,productControllers.remove)


module.exports = route