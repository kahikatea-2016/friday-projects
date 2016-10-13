import test from 'tape'
import knex from 'knex'

import {getProjects} from '../server/db'

const testConfig = {
  client: 'sqlite3',
  connection: {filename: ':memory:'}
}
const testDb = knex(testConfig)

test('getProjects', function (t) {
  // arrange
  createTestData()

  // act
  getProjects(testDb, projects => {
    // assert
    t.equal(projects[0].id, 1)
    t.equal(projects[0].title, 'Project One')
    t.equal(projects[0].id, 2)
    t.equal(projects[0].title, 'Project Two')
    t.end()
  })
})

function createTestData () {
  testDb.migrate.latest(testConfig)
    .then(function () {
      return knex.seed.run(testConfig)
    })
    .then(function () {
      // migrations are finished
    })
}
