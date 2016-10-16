const knex = require('knex')

const config = require('../knexfile').development

const db = knex(config)

export default {
  getProjects: getProjects.bind(null, db)
}

export function getProjects (db) {
  return new Promise((resolve, reject) => {
    db().select('title', 'id')
      .from('projects')
      .then(resolve)
      .catch(reject)
  })
}
