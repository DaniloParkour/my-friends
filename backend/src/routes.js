const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
//const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');

const generateUniqueId = require('./util/generateUniqueId');

//const connection = require('./database/conections');

const routes = express.Router();

//List all registries => GET on /ongs
routes.get('/ongs', OngController.index); /*async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});*/

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(), //unknown() vai descartar as validações não definidas
}), ProfileController.index);

routes.post('/sessions', SessionController.create);

routes.post('/users', UserController.create);

//USING CELEBRATE: https://www.npmjs.com/package/celebrate

//Using ASYNC - AWAIT for connection.
//POST to create a new registry => POST on /ongs
routes.post('/ongs', celebrate( {
    //Query Params, Route Params, Body, Header, Cookies  ...
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),  //.min(3).max(20) //Test if have 3+ characers and 20- charatcers
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(12).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2), //length(2): Have just 2 characters
        cnpj: Joi.string().optional(),
        cep: Joi.string().required(),
        end_num: Joi.string().required(),
        type_ong: Joi.string().required(),
        person_name: Joi.string().required(),
        person_document: Joi.required(),
    })
} ), OngController.create); //async (request, response) => {
    
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

//On node, we use module.exports to export something to other files
module.exports = routes;
//To use the routes on other file just inport using "const routes = require('./routes')" 
//"./routes" if the other file is on the same folder