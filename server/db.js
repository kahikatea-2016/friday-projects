const knex = require('knex')

const config = require('../knexfile').development

const db = knex(config)

module.exports = {
  _getProjects: _getProjects,
  getProjects: _getProjects.bind(null, db)
}

function _getProjects (db) {
  return new Promise((resolve, reject) => {
    db().select('title', 'id')
      .from('projects')
      .then(resolve)
      .catch(reject)
  })
}
