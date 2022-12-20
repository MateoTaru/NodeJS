const jwt = require('jsonwebtoken')
const globalConstants = require('../const/globalConstants')

module.exports = function(usuario){

    if(usuario){
        //Se crea el Token con datos del usuario

        const token = jwt.sign({
            id: usuario.id
        },
            globalConstants.JWT_SECRET,
            {
                expiresIn: '30000'
            }
        )
        return token
    } else {    
        return null 
    }


}