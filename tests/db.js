import test from 'tape'
import knex from 'knex'

import {getProjectsPromise} from '../server/db'

const testConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {filename: ':memory:'}
}
const testDb = knex(testConfig)

test('getProjects', function (t) {
  // arrange
  createTestData().then(() => {
    // act
    getProjectsPromise(testDb)
      .then(projects => {
        // assert
        t.equal(projects[0].id, 1)
        t.equal(projects[0].title, 'Project One')
        t.equal(projects[1].id, 2)
        t.equal(projects[1].title, 'Project Two')
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
