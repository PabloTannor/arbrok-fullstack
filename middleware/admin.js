const isAdmin = (res,req,next) =>{
    if(req.user.isAdmin){
        next()
    }else{
        res.redirect("http://localhost:3000/")
    }
}

module.exports = isAdmin