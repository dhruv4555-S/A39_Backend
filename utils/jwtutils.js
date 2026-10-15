import jwt from 'jsonwebtoken'
import secretKey from '../jwtconfig.js'

const genrateToken = (user) => {

    const payload = {
        id:user._id,
        email:user.email
    }

    return jwt.sign(payload,secretKey,{expiresIn:'24h'})
}

export default genrateToken