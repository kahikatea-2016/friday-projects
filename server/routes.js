var db = require('./db')

module.exports = {
  _getProjects: _getProjects,
  getProjects: _getProjects.bind(null, db),
  _getProject: _getProject,
  getProject: _getProject.bind(null, db),
  _addProject: _addProject,
  addProject: _addProject.bind(null, db),
  _updateProject: _updateProject,
  updateProject: _updateProject.bind(null, db)
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

function _addProject (db, req, res) {
  var project = {
    title: req.body.title,
    teamName: req.body.teamName,
    description: req.body.description,
    date: req.body.date,
    repoUrl: req.body.repoUrl,
    appUrl: req.body.appUrl,
    teamMembers: req.body.teamMembers,
    photoUrl: req.body.photoUrl,
    photoCaption: req.body.photoCaption
  }
  db.addProject(project)
    .then(function () {
      res.json(project)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function _updateProject (db, req, res) {
  var project = {
    id: req.body.id,
    title: req.body.title,
    teamName: req.body.teamName,
    description: req.body.description,
    date: req.body.date,
    repoUrl: req.body.repoUrl,
    appUrl: req.body.appUrl,
    teamMembers: req.body.teamMembers,
    photoUrl: req.body.photoUrl,
    photoCaption: req.body.photoCaption
  }
  db.updateProject(project)
    .then(function () {
      res.json(project)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}
