const connection = require('../database/conections');

module.exports = {

    async delete(request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        //Verify if the incident to remove was created by the current ong
        const incident = await connection('incidents')
                                            .where('id', id)
                                            .select('ong_id')
                                            .first(); //To return a element and not a vector with only one element
        if(incident.ong_id != ong_id) {
            //401 statur code is Unauthorized
            //Return a 401 code if the incident is not of this ong
            return response.status(401).json({error: 'Operation ii not Authorized'});
        }

        await connection('incidents').where('id', id).delete();
        
        //204 is to return when the request works but have no content to return
        return response.status(204).send();
    },

    async index(request, response) {

        //Using Pagination
        const {page = 1} = request.query;

        //Making result with each 5-5 registries 
        const incidents = await connection('incidents')
                                                //The Join that get ONG informations with same ID on ongs table
                                                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                                                .limit(5) //Get only 5 registries
                                                .offset((page - 1) * 5) //The 5 registries of page X
                                                .select([
                                                    'incidents.*',
                                                    'ongs.name', 
                                                    'ongs.email', 
                                                    'ongs.whatsapp',
                                                    'ongs.city', 
                                                    'ongs.uf',
                                                    'ongs.cnpj',
                                                    'ongs.cep',
                                                    'ongs.end_num',
                                                    'ongs.type_ong',
                                                    'ongs.person_name',
                                                    'ongs.person_document'
                                                ]);

        //Getting the total of registies for this case
        const [count] = await connection('incidents').count();

        /* THIS CODE DO SAME OF THE LINE ABOVE
        const count_all = await connection('incidents').count();
        const count = count_all[0];
        */

        //Put the COUNT on response's header to let only data on ison incidents
        response.header('X-Total-Count', count['count(*)']);
        //OBS: The name 'count(*)' can be verified with "console.log(count)"
        
        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body;

        const ong_id = request.headers.authorization;

        //const result = await connection('incidents').insert({
        
        //Get Just "id" from inserted registry
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        //const id = result[0];

        return response.json({ id });
        
    }
}