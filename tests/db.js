import test from 'tape'
import knex from 'knex'

// import {getProjects} from '../server/db'

import {updateProject} from '../server/db'

const testConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {filename: ':memory:'}
}
const testDb = knex(testConfig)

// test('getProjects', function (t) {
//   // arrange
//   createTestData().then(() => {
//     // act
//     getProjects(testDb)
//       .then(projects => {
//         // assert
//         t.equal(projects[0].id, 1)
//         t.equal(projects[0].title, 'Project One')
//         t.equal(projects[1].id, 2)
//         t.equal(projects[1].title, 'Project Two')
//         t.end()
//       })
//   })
// })

//
test('updateProject', function (t) {
  // arrange
  createTestData().then(() => {
    // act
    updateProject(testDb)
      .then(projects => {
        // assert
        t.equal(projects[0].title, '')
        t.equal(projects[0].id, '')
        t.equal(projects[0].description, '')
        t.equal(projects[0].repo_url, '')
        t.equal(projects[0].app_url, '')
        t.equal(projects[0].date, '')
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
