import test from 'tape'
import {getProjects} from '../server/routes'

var fakeProjects = [
  {
    id: 1,
    title: 'Project One'
  },
  {
    id: 2,
    title: 'Project Two'
  }
]

var errMsg = 'test error message'

test('getProjects route success', function (t) {
  // arrange
  var db = getFakeDbModule(true)
  var res = {
    json (projects) {
      // assert
      t.deepEqual(projects, fakeProjects)
      t.end()
    }
  }

  // act
  getProjects(db, null, res)
})

test('getProjects route failure', function (t) {
  // arrange
  var db = getFakeDbModule(false)
  var res = {
    send (message) {
      // assert
      t.equal(message, errMsg)
      return this
    },
    status (code) {
      t.equal(code, 500)
      t.end()
    }
  }

  // act
  getProjects(db, null, res)
})

function getFakeDbModule (shouldPass) {
  return {
    getProjects () {
      return new Promise((resolve, reject) => {
        if (shouldPass) {
          resolve(fakeProjects)
        } else {
          reject(new Error(errMsg))
        }
      })
    }
  }
}
