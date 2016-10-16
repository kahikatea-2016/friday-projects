const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'list.html'))
})

app.get('/v1/projects', routes.getProjects)
app.get('/v1/projects/:id', routes.getProject)
// app.post('v1/projects', routes.addProject)
// app.put('v1/projects', routes.updateProject)

app.listen(PORT, () => console.log('Listening to port', PORT))
