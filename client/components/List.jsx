import React from 'react'

export default React.createClass({
  propTypes: {
    projects: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string
    }))
  },
  
  render () {
    return (
      <div>
        <h2>Click below to check out some Friday Projects</h2>
        <ul>
          {this.props.projects.map(project => {
            return (
              <li key={project.id}><a href={`/details/${project.id}`}>{project.title}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
})
