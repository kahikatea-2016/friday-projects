import test from 'tape-async'
import knex from 'knex'

import {_getProjects, _getProject} from '../server/db'

const testConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {filename: ':memory:'}
}

test('getProjects', function (t) {
  createTestData().then(testDb => {
    // act
    _getProjects(testDb)
      .then(projects => {
        t.equal(projects[0].id, 1)
        t.equal(projects[0].title, 'Project One')
        t.equal(projects[1].id, 2)
        t.equal(projects[1].title, 'Project Two')
        testDb.destroy()
        t.end()
      })
  })
})

test('getProject', function (t) {
  createTestData().then(testDb => {
    _getProject(testDb, 1)
      .then(project => {
        t.equal(project.id, 1)
        t.equal(project.title, 'Project One')
        t.equal(project.description, 'This is project one')
        t.equal(project.teamName, 'pacman')
        t.equal(project.repoUrl, 'http://github.com/projectone')
        t.equal(project.appUrl, 'http://projectone.com')
        t.equal(project.date, '02/08/2016')
        t.deepEqual(project.photos, [{caption: 'what a cool photo', photoUrl: 'http://cache.gawkerassets.com/assets/images/17/2010/05/500x_afternoon-projects.jpg'},
        {caption: 'star wars is cool', photoUrl: 'http://www.supercoolrobots.com/wp-content/uploads/sites/76/2014/12/BB-8-pic-2x1-760x350.jpg'}])
        t.deepEqual(project.teamMembers, [{memberId: 1, memberName: 'Andrew'},
         {memberId: 2, memberName: 'Jaive'},
         {memberId: 3, memberName: 'Sam'}])
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
    .then(function () {
      return testDb
    })
    .then(() => testDb)
    })
}
