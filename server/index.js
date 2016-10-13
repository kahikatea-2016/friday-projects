const path = require('path')
const express = require('express')

var routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'list.html'))
})

app.get('/v1/projects', routes.getProjects)
app.get('/v1/projects/:id', routes.getProject)

app.listen(PORT, () => console.log('Listening to port', PORT))
