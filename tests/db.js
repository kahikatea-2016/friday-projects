import test from 'tape'
import knex from 'knex'

import db from '../server/db'

const testConfig = {
  client: 'sqlite3',
  connection: {filename: ':memory:'}
}
const testDb = knex(testConfig)

test('getProjects', function (t) {
  // arrange
  createTestData()

  // act
  db.getProjects(testDb, projects => {
    // assert
    t.equal(projects[0].id, 1)
    t.equal(projects[0].title, 'Project One')
    t.equal(projects[0].id, 2)
    t.equal(projects[0].title, 'Project Two')
    t.end()
  })
})

function createTestData () {
  knex.migrate.latest(testConfig)
  knex.seed.run(testConfig)
}
