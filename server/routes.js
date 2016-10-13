var db = require('./db')

module.exports = {
  getProjects: getProjects
}

function getProjects (req, res) {
  db.getProjects()
  .then(function (projects) {
    res.json(projects)
  })
  .catch(console.error)
}
