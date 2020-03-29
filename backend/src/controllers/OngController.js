const connection = require('../database/conections');
const generateUniqueId = require('../util/generateUniqueId');

module.exports = {

    async create(request, response) {
        const {name, email, whatsapp, city, uf, cnpj, cep, end_num, type_ong, person_name, person_document} = request.body;
    
        //Generates a 4 Bytes Hexadecimal randon ID
        const id = generateUniqueId();

        await connection('ongs').insert( {
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
            cnpj,
            cep,
            end_num,
            type_ong,
            person_name,
            person_document
        });
        
        return response.json({id});
    },

    //List all ONGS
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    }
}