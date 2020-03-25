
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable(); //uf is a string up to 2 characters
      
      table.string('cnpj').nullable();
      table.string('cep').notNullable();
      table.string('end_num').notNullable();
      table.string('type_ong').notNullable();
      table.string('person_name').notNullable();
      table.string('person_document').notNullable();
  });
};

exports.down = function(knex) { //The UP not work? Call tha Down implementations.
  return knex.schema.dropTable('ongs');
};
