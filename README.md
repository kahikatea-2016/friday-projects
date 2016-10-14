# friday-projects
An app to manage the awesomeness that is Friday Projects

# Data Model
<img src ="https://github.com/kahikatea-2016/friday-projects/blob/data-model/docs/datamodel.jpg">
The Data Model For This Project Consists of the Following Tables:

* Photos
  - URL
  - Caption
  - ProjectID

* Projects
  -Title
  -Description
  -RepoUrl
  -Date

* ProjectTeam
  -ProjectID
  -TeamMemberID

* Team Member
- Name


Routes //

getProjects
request expect - null
response expect - json array

getProject
request expect - req.params.id
response expect - json array

addProject
request expect - req.body
response expect - 204

updateProject
request expect - req.body
response expect - 204
