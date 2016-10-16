import React from 'react'
import List from './List'

const projects = [
  {id: 1, title: 'Project One', description: 'This is project one'},
  {id: 2, title: 'Project Two', description: 'This is project two'}
]

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Friday Projects</h1>
        <List projects={projects} />
        <Details />
        <button>Add a project</button>
      </div>
    )
  }
})
