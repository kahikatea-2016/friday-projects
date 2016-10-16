// var db = require('./db')
var db = {}

export default {
  getProjects: getProjects.bind(null, db),
  getProject: getProject.bind(null, db),
  addProject: addProject.bind(null, db)
}

export function getProjects (db, req, res) {
  db.getProjects()
    .then(function (projects) {
      res.json(projects)
    })
    .catch(function (err) {
      res.send(err.message).status(500)
    })
}

export function getProject (db, req, res) {
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

export function addProject (db, req, res) {
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
