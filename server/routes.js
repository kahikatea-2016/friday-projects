var db = require('./db')

module.exports = {
  getProjects: getProjects,
  getProject: getProject,
  addProject: addProject,
  updateProject: updateProject
}

function getProjects (req, res) {
  db.getProjects()
    .then(function (projects) {
      res.json(projects)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function getProject (req, res) {
  var projectId = Number(req.params.id)
  if (!isNaN(projectId)) {
    db.getProject(projectId)
      .then(function (project) {
        res.json(project)
      })
      .catch(function (err) {
        res.send(err.message).status(500)
      })
  }
}

function addProject (req, res) {
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
      res.send(204)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

function updateProject (req, res) {
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
  db.updateProject(project)
    .then(function () {
      res.send(204)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}
