const connection = require('../database/conections');

module.exports = {
    async create(request, response) {
        const {id} = request.body;
        
        const ong = await connection('ongs')
                            .where('id', id)
                            .select('name')
                            .first();

        //if ONG not exists
        if(!ong) {
            return response.status(400).json({error: 'No ONG Found'});
        }

        return response .json(ong);
    }
}