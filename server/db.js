const knex = require('knex')

const config = require('../knexfile').development

const db = knex(config)

export default {
  getProjects: getProjects.bind(null, db),
  getProjectsPromise: getProjectsPromise.bind(null, db)
  // updateProject: updateProject
}

export function getProjects (db, cb) {
  return db()
  .select('title', 'id')
  .from('projects')
  .then(projects => cb(null, projects))
  .catch(err => cb(err))
}

export function getProjectsPromise (db) {
  return new Promise((resolve, reject) => {
    db().select('title', 'id')
      .from('projects')
      .then(resolve)
      .catch(reject)
  })
}

// function updateProject (project) {
//
// }
//
// //Finds Project name
// // Finds Project Tables
// // Tables that Have Changes
// // Add/inserts the values
