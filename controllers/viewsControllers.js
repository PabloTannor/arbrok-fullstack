const Product = require('../models/productsModels.js')
const Cart = require('../models/cartModel.js')

const login = (req,res)=>{
    res.render('pages/login.ejs')
}

const register = (req,res)=>{
    res.render('pages/register.ejs')
}

const home = async (req,res)=>{
    const products = await Product.find({})
    const shoppingCart = await Cart.findOne({userId:req.user._id})
  
    if(req.user){
        res.render('pages/home',{user:req.user,products:products,cart:shoppingCart.products})
    }else{
        res.redirect("http://localhost:3000/login")
    }
    
}

const dashboard = (req,res)=>{
    res.render('pages/dashboard')
}

const cart = async (req,res)=>{
    const shoppingCart = await Cart.findOne({userId:req.user._id})
    const promises = []
    shoppingCart.products.forEach((id)=>{
        const promise = Product.findById(id)
        promises.push(promise)
    })
    await Promise.all(promises).then((products)=>{
        res.render('pages/shoppingCart',{products:products})
    })
    
}

module.exports= {
    login:login,
    register:register,
    home:home,
    dashboard:dashboard,
    cart:cart
}