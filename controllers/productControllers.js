const product = require('../models/productsModels.js')

const create = async (req,res)=>{
    try {
        await product.create({
            name:req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description
        })

        res.status(201).end()
        
    } catch (error) {
        res.status(500).end()
    }
    
}

const update = async (req,res)=>{
    try {
        await product.findByIdAndUpdate(req.body.productId,req.body)
        res.status(201).end()

    } catch (error) {
        res.status(500).end()     
    }
    
}

const remove = async (req,res)=>{
    try {
        await product.findByIdAndDelete(req.body.productId)
        res.status(201).end()
    } catch (error) {
        res.status(500).end()
    }
    
}

const get = async (req,res)=>{
    try {
        const products = await product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).end()
    }
    
}

module.exports= {
   create:create,
   update:update,
   remove:remove,
   get:get

}