const knex = require('knex');
const configutration = require('../../knexfile');

const connection = knex(configutration.development);

module.exports = connection;