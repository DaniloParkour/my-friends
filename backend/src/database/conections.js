const knex = require('knex');
const configutration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configutration.test : configutration.development;

//const connection = knex(configutration.development);
const connection = knex(config);

//OBS: The Test and Development environment are defined on package.json file

module.exports = connection;