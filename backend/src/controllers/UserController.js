const connection = require('../database/conections');
const generateUniqueId = require('../util/generateUniqueId');
const bcrypt = require('bcryptjs');

module.exports = {

    async create(req, res) {
        
        var {name, email, password, whatsapp, availabilities} = req.body;
            
            //Generates a 4 Bytes Hexadecimal randon ID
            const id = generateUniqueId();

            password = await bcrypt.hash(password, bcrypt.genSaltSync(10));
            
            await connection('users').insert( {
                id,
                name,
                email,
                password,
                whatsapp,
                availabilities
            });
            
            return res.json({id});
        
    }
    
}