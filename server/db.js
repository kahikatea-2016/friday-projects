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
    db('projects')
      .join('photos', 'projects.id', '=', 'photos.project_id')
      .join('project_teams', 'projects.id', '=', 'project_teams.project_id')
      .join('team_members', 'team_members.id', '=', 'project_teams.team_member.id')
      .select('projects.id', 'projects.title', 'projects.description', 'projects.team_name as teamName', 'projects.repo_url as repoUrl', 'projects.app_url as appUrl', 'projects.date', 'photos.url as photoUrl', 'photos.caption', 'team_members.id as teamMemberId', 'team_members.name')
      .where('projects.id', '=', id)
      .then(project => {
        console.log(project)
        resolve({
          id: project.id,
          title: project.title,
          description: project.description,
          repoUrl: project.repoUrl,
          appUrl: project.appUrl,
          date: project.date,
          photoUrl: project.photoUrl,
          photoCaption: project.caption,
          teamName: project.teamName
        })
      })
      .catch(reject)
  })
}
