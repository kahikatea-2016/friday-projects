import React from 'react'
import List from './List'

const projects = [
  {id: 1, title: 'Project One'},
  {id: 2, title: 'Project Two'}
]

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Friday Projects</h1>
        <List projects={projects} />
        <button>Add a project</button> | <button>Edit a project</button>
      </div>
    )
  }
})
