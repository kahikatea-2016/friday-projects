exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('projects').del(),
    knex('photos').del(),
    knex('team_members').del(),
    knex('project_teams').del()
  ])
    .then(function () {
      return knex('projects').insert({id: 1, title: 'Project One', description: 'This is project one', repo_url: 'http://github.com/projectone', app_url: 'http://projectone.com', date: '02/08/2016'})
    })
    .then(function () {
      return knex('projects').insert({id: 2, title: 'Project Two', description: 'This is project two', repo_url: 'http://github.com/projecttwo', app_url: 'http://projecttwo.com', date: '03/08/2016'})
    })
    .then(function () {
      return knex('photos').insert({id: 1, url: 'http://cache.gawkerassets.com/assets/images/17/2010/05/500x_afternoon-projects.jpg', caption: 'what a cool photo', projects_id: 1})
    })
    .then(function () {
      return knex('photos').insert({id: 2, url: 'http://www.supercoolrobots.com/wp-content/uploads/sites/76/2014/12/BB-8-pic-2x1-760x350.jpg', caption: 'star wars is cool', projects_id: 2})
    })
    .then(function () {
      return knex('team_members').insert({id: 1, name: 'Andrew'})
    })
    .then(function () {
      return knex('team_members').insert({id: 2, name: 'Jaive'})
    })
    .then(function () {
      return knex('project_teams').insert({id: 1, team_members_id: 1, projects_id: 1})
    })
    .then(function () {
      return knex('project_teams').insert({id: 2, team_members_id: 2, projects_id: 2})
    })
}
