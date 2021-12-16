
exports.up = async function(knex) {
  await knex.schema.createTable('children', table=>{
      table.increments('child_id')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('children')
};