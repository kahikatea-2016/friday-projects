const db = require('./db')

export default {
  getProjects: getProjects.bind(null, db)
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
