const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const mongoose = require('mongoose')
const viewsRouter = require('./routers/viewsRoutes.js')
const userRoutes = require('./routers/userRoutes.js')
const productRoutes = require('./routers/productsRoute.js')
const cookieParser = require('cookie-parser')
const cartRoutes = require('./routers/cartRoutes.js')

const app = express()

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static('public'))
app.set('view engine','ejs')



//rutas vistas
app.use('/',viewsRouter)

//rutas de recursos
app.use('/api/user/',userRoutes)
app.use('/api/product/',productRoutes)
app.use('/api/cart/',cartRoutes)


const port = 3000


app.listen(port, async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/proyecto--final');
    console.log(`Example app listening on port ${port}`)
  }catch(error){
    console.log("error to connect mongoDB",error)
  }
  

})