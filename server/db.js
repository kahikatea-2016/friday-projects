const knex = require('knex')

const config = require('../knexfile')[process.env.NODE_ENV || 'development']

const db = knex(config)

module.exports = {
  _getProjects: _getProjects,
  getProjects: _getProjects.bind(null, db),
  _getProject: _getProject,
  getProject: _getProject.bind(null, db)
}

function _getProjects (db) {
  return new Promise((resolve, reject) => {
    db('projects')
      .select('title', 'id')
      .then(resolve)
      .catch(reject)
  })
}

function _getProject (db, id) {
  return new Promise((resolve, reject) => {
    db('projects')
      .join('photos', 'projects.id', '=', 'photos.project_id')
      .join('project_teams', 'projects.id', '=', 'project_teams.project_id')
      .join('team_members', 'project_teams.team_member_id', '=', 'team_members.id')
      .select('projects.id as id', 'projects.title', 'projects.description', 'projects.team_name as teamName', 'projects.repo_url as repoUrl', 'projects.app_url as appUrl', 'projects.date', 'photos.url as photoUrl', 'photos.caption', 'team_members.id as memberId', 'team_members.name as memberName')
      .where('projects.id', '=', id)
      .then(project => {
        const properProject = transformProject(project)
        resolve(properProject)
      })
      .catch(reject)
  })
}

function transformProject (project) {
  return {
    id: project[0].id,
    title: project[0].title,
    description: project[0].description,
    teamName: project[0].teamName,
    repoUrl: project[0].repoUrl,
    appUrl: project[0].appUrl,
    date: project[0].date,
    photos: getPhotos(project),
    teamMembers: getTeamMembers(project)
  }
}

function getPhotos (projects) {
  var photos = []
  var foundCaptions = []
  for (var i = 0; i < projects.length; i++) {
    if (!foundCaptions.includes(projects[i].caption)) {
      photos.push({
        caption: projects[i].caption,
        photoUrl: projects[i].photoUrl
      })
      foundCaptions.push(projects[i].caption)
    }
  }
  return photos
}

function getTeamMembers (projects) {
  var member = []
  var foundId = []
  for (var i = 0; i < projects.length; i++) {
    if (!foundId.includes(projects[i].memberId)) {
      member.push({
        memberId: projects[i].memberId,
        memberName: projects[i].memberName
      })
      foundId.push(projects[i].memberId)
    }
  }
  return member
}
