import test from 'tape'
import knex from 'knex'

import {_getProjects} from '../server/db'

const testConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {filename: ':memory:'}
}

test('getProjects', function (t) {
  // arrange
  createTestData().then(testDb => {
    // act
    _getProjects(testDb)
      .then(projects => {
        // assert
        t.equal(projects[0].id, 1)
        t.equal(projects[0].title, 'Project One')
        t.equal(projects[1].id, 2)
        t.equal(projects[1].title, 'Project Two')
        testDb.destroy()
        t.end()
      })
  })
})

function createTestData () {
  const testDb = knex(testConfig)
  return testDb.migrate.latest(testConfig)
    .then(() => {
      return testDb.seed.run(testConfig)
        .then(() => testDb)
    })
}
