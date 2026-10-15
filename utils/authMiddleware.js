
import jwt from 'jsonwebtoken'
import secretkey from '../jwtconfig.js'

function authanticateToken(req,res,next){
    const authHeader = req.header('Authorization')
    if(!authHeader){
        res.status(401).json({'message':"Authorization is Missing"})
    }

    const [bearer ,token] = authHeader.split(" ")

    if(bearer !="Bearer" || !token){
        res.status(401).json({'message':"Invelid Token Formated"})    
    }

    jwt.verify(token,secretkey,(error,user)=>{
        if(error){
            res.status(403).json({'message':"Invelid Token"})
        }
        req.user = user;
        next()
    })
}

export default authanticateToken