var db = require('./db')

module.exports = {
  getProjects: getProjects,
  getProject: getProject
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
