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
  .catch(console.error)
}

function getProject (req, res) {
  db.getProject(req.body.id)
  .then(function (project) {
    res.json(project)
  })
  .catch(console.error)
}

function addProject (req, res) {
  var project = {
    title: req.body.title,
    teamName: req.body.teamName,
    description: req.body.description,
    date: req.body.repoURL,
    teamMembers: req.body.teamMembers,
    photoURL: req.body.photoURL,
    photoCaption: req.body.photoCaption
  }
  db.addProject(project)
  .then(function () {
    res.send(204)
  })
  .catch(console.error)
}

function updateProject (req, res) {
  var project = {
    title: req.body.title,
    teamName: req.body.teamName,
    description: req.body.description,
    date: req.body.repoURL,
    teamMembers: req.body.teamMembers,
    photoURL: req.body.photoURL,
    photoCaption: req.body.photoCaption
  }
  db.updateProject(project)
  .then(function () {
    res.send(204)
  })
  .catch(console.error)
}
