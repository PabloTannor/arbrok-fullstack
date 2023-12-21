const express =require('express')
const route = express.Router()
const viewsControllers = require('../controllers/viewsControllers.js')
const authMiddleware = require('../middleware/auth.js')
const isAdmin = require("../middleware/admin.js")

route.get('/login',viewsControllers.login)

route.get('/register',viewsControllers.register)

route.get('/',authMiddleware,viewsControllers.home)

route.get("/dashboard",authMiddleware,isAdmin,viewsControllers.dashboard)

route.get('/cart',authMiddleware,viewsControllers.cart)



module.exports = route