const express = require('express');
//const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//const connection = require('./database/conections');

const routes = express.Router();

//Using ASYNC - AWAIT for connection.
//POST to create a new registry => POST on /ongs
routes.post('/ongs', OngController.create); //async (request, response) => {


    
    /*
    //const {name, email, whatsapp, city, uf, cep, end_num, type_ong, person_name, person_document} = request.body;

    const {name, email, whatsapp, city, uf, cnpj, cep, end_num, type_ong, person_name, person_document} = request.body;
    
    //Generates a 4 Bytes Hexadecimal randon ID
    const id = crypto.randomBytes(4).toString('HEX');

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
    
    return response.json({id}); */
//});

//List all registries => GET on /ongs
routes.get('/ongs', OngController.index); /*async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});*/

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);



//On node, we use module.exports to export something to other files
module.exports = routes;
//To use the routes on other file just inport using "const routes = require('./routes')" 
//"./routes" if the other file is on the same folder