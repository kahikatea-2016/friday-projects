/* eslint camelcase: [2, {properties: "never"}] */

const knex = require('knex')

const config = require('../knexfile')[process.env.NODE_ENV || 'development']

const db = knex(config)

module.exports = {
  _getProjects: _getProjects,
  getProjects: _getProjects.bind(null, db),
  _addProject: _addProject,
  addProject: _addProject.bind(null, db)
}

function _getProjects (db) {
  return new Promise((resolve, reject) => {
    db().select('title', 'id')
      .from('projects')
      .then(resolve)
      .catch(reject)
  })
}

function _addProject (project) {
  return new Promise((resolve, reject) => {
    knex('projects')
    .insert({
      title: project.title,
      description: project.description,
      repo_url: project.repoUrl,
      app_url: project.appUrl,
      date: project.date
    })
    .then(projectId => addTeamMembers(projectId, project.teamMembers))
    .then(projectId => addPhotos(projectId, project.photoUrl, project.photoCaption))
    .then(resolve)
    .catch(reject)
  })
}

function addTeamMembers (projectId, teamMembers) {
  console.log('projectId: ', projectId)
  return knex('team_members')
    .insert({name: teamMembers})
    .then(() => {
      return projectId
    })
}

function addPhotos (projectId, photosUrl, photosCaption) {
  return knex('photos')
    .insert({url: photosUrl, caption: photosCaption})
    .then(() => {
      return projectId
    })
}
