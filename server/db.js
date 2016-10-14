const knex = require('knex')

const config = require('../knexfile').development

const db = knex(config)

export default {
  getProjects: getProjects.bind(null, db),
  getProject: getProject.bind(null, db)
}

export function getProjects (db) {
  return new Promise((resolve, reject) => {
    db('projects')
      .select('title', 'id')
      .then(resolve)
      .catch(reject)
  })
}

export function getProject (db, id) {
  return new Promise((resolve, reject) => {
    db('projects').first()
      .join('photos', 'projects.id', '=', 'photos.project_id')
      .join('project_teams', 'projects.id', '=', 'project_teams.project_id')
      // .join('project_teams', 'team_member_id', '=', 'project_teams.team_members.id')
      .select('projects.id', 'projects.title', 'projects.description', 'projects.repo_url', 'projects.app_url', 'projects.date', 'photos.url', 'photos.caption')
      .where('projects.id', '=', id)
      .then(project => {
        resolve({
          id: project.id,
          title: project.title,
          description: project.description,
          repoUrl: project.repo_url,
          appUrl: project.app_url,
          date: project.date,
          photoUrl: project.url,
          photoCaption: project.caption
        })
      })
      .catch(reject)
  })
}
