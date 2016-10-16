import test from 'tape'
import knex from 'knex'

import {getProjects, getProject} from '../server/db'

const testConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {filename: ':memory:'}
}
const testDb = knex(testConfig)

test('getProjects', function (t) {
  createTestData().then(() => {
    getProjects(testDb)
      .then(projects => {
        t.equal(projects[0].id, 1)
        t.equal(projects[0].title, 'Project One')
        t.equal(projects[1].id, 2)
        t.equal(projects[1].title, 'Project Two')
        t.end()
      })
  })
})

test('getProject', function (t) {
  createTestData().then(() => {
    getProject(testDb, 1)
      .then(project => {
        console.log(project)
        // t.equal(project.id, 1)
        // t.equal(project.title, 'Project One')
        // t.equal(project.description, 'This is project one')
        // t.equal(project.repoUrl, 'http://github.com/projectone')
        // t.equal(project.appUrl, 'http://projectone.com')
        // t.equal(project.date, '02/08/2016')
        // t.equal(project.photoUrl, 'http://cache.gawkerassets.com/assets/images/17/2010/05/500x_afternoon-projects.jpg')
        // t.equal(project.photoCaption, 'what a cool photo')
        // t.equal(project.teamName, 'pacman')
        t.end()
      })
  })
})

function createTestData () {
  return testDb.migrate.latest(testConfig)
    .then(function () {
      return testDb.seed.run(testConfig)
    })
}
