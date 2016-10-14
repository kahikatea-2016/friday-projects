var db = {}// require('./db')

export default {
  getProjects: getProjects.bind(null, db),
  getProject: getProject.bind(null, db)
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
