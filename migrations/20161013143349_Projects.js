
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', function(table){
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.string('url')
      table.date('date')
    }),
    knex.schema.createTable('photos', function(table){
      table.increments('id').primary()
      table.string('url')
      table.string('caption')
      table.integer('projects_id').references('projects.id')
    }),
    knex.schema.createTable('teammember', function(table){
      table.increments('id').primary()
      table.string('name')
    }),
    knex.schema.createTable('projectteam', function(table){
      table.increments('id').primary()
      table.integer('teammember_id').references('teammember.id')
      table.integer('project_id').references('projects.id')
    })
  ])

}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('projects'),
    knex.schema.dropTable('photos'),
    knex.schema.dropTable('teammember'),
    knex.schema.dropTable('projectteam')
  ])
}
