exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', function (table) {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.string('repo_url')
      table.string('app_url')
      table.date('date')
    }),
    knex.schema.createTable('photos', function (table) {
      table.increments('id').primary()
      table.string('url')
      table.string('caption')
      table.integer('projects_id').references('projects.id')
    }),
    knex.schema.createTable('team_members', function (table) {
      table.increments('id').primary()
      table.string('name')
    }),
    knex.schema.createTable('project_teams', function (table) {
      table.increments('id').primary()
      table.integer('team_members_id').references('team_members.id')
      table.integer('projects_id').references('projects.id')
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
