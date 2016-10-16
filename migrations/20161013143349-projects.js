exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', function (table) {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.string('team_name')
      table.string('repo_url')
      table.string('app_url')
      table.date('date')
    }),
    knex.schema.createTable('photos', function (table) {
      table.increments('id').primary()
      table.string('url')
      table.string('caption')
      table.integer('project_id').references('projects.id')
    }),
    knex.schema.createTable('team_members', function (table) {
      table.increments('id').primary()
      table.string('name')
    }),
    knex.schema.createTable('project_teams', function (table) {
      table.increments('id').primary()
      table.integer('project_id').references('projects.id')
      table.integer('team_member_id').references('team_members.id')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('projects'),
    knex.schema.dropTable('photos'),
    knex.schema.dropTable('team_members'),
    knex.schema.dropTable('project_teams')
  ])
}
