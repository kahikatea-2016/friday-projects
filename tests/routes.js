import test from 'tape'

import {_getProjects, _getProject, _updateProject} from '../server/routes'

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

var fakeProject = {
  title: 'Project one',
  teamName: 'Team Cool',
  description: 'A great project',
  date: '14/10/2016',
  repoUrl: 'www.github.com/projectone',
  appUrl: 'www.projectone.com',
  teamMembers: 'Sam, Jaive',
  photoUrl: 'www.coolphoto.com',
  photoCaption: 'what a cool photo'
}
var updateFakeProject = {
  body: {
    id: 1,
    title: 'Project one',
    teamName: 'Team Cool',
    description: 'A great project',
    date: '14/10/2016',
    repoUrl: 'www.github.com/projectone',
    appUrl: 'www.projectone.com',
    teamMembers: 'Sam, Jaive',
    photoUrl: 'www.coolphoto.com',
    photoCaption: 'what a cool photo'
  }
}

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
  _getProjects(db, null, res)
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
  _getProjects(db, null, res)
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

test('getProject route success', function (t) {
  // arrange
  var db = getFakeDbModuleProject()
  var res = {
    json (project) {
      // assert
      t.deepEqual(project, fakeProject)
      t.end()
    }
  }
  var req = {
    params: {
      id: 1
    }
  }

  // act
  _getProject(db, req, res)
})

test('getProject route failure', function (t) {
  // arrange
  var req = {
    params: {
      id: 'f'
    }
  }
  var res = {
    send (message) {
      // assert
      t.equal(message, 'invalid id', 'detects invalid id')
      return this
    },
    status (code) {
      t.equal(code, 404, 'returns 404')
    }
  }
  t.end()
  // act
  _getProject(null, req, res)
})

function getFakeDbModuleProject () {
  return {
    getProject () {
      return new Promise(resolve => {
        resolve(fakeProject)
      })
    }
  }
}

test('addProject route success', function (t) {
  // arrange
  var db = getFakeDbModuleUpdateProject(true)
  var res = {
    json (project) {
      // assert
      t.deepEqual(project, updateFakeProject.body)
      t.end()
    }
  }
  // act
  _updateProject(db, updateFakeProject, res)
})

function getFakeDbModuleUpdateProject (shouldPass) {
  return {
    updateProject () {
      return new Promise((resolve, reject) => {
        if (shouldPass) {
          resolve(updateFakeProject)
        } else {
          reject(new Error(errMsg))
        }
      })
    }
  }
}
