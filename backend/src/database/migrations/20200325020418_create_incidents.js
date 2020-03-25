
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); //Auto increment para o ID
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable(); //Relationship Ong - Incident
        
        //The Foreign Key have to defined and linked to right other table and collumn
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
