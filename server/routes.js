var db = require('./db')

module.exports = {
  _getProjects: _getProjects,
  getProjects: _getProjects.bind(null, db),
  _getProject: _getProject,
  getProject: _getProject.bind(null, db)
}

function _getProjects (db, req, res) {
  db.getProjects()
    .then(function (projects) {
      res.json(projects)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function _getProject (db, req, res) {
  var projectId = Number(req.params.id)
  if (isNaN(projectId)) {
    res.send('invalid id').status(404)
  } else {
    db.getProject(projectId)
      .then(function (project) {
        res.json(project)
      })
      .catch(function (err) {
        res.send(err.message).status(500)
      })
  }
}
