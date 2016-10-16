import React fom 'react'

export default React.createClass({
  propTypes: {
    projects: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      repo_url: React.PropTypes.string,
      app_url: React.PropTypes.string,
      date: React.PropTypes.string
    }))
  },
  render () {
    return (
      <div>
        <h2 key={project.id}>{this.props.project.title}</h2>
              <p >{project.title}</p>
              <p>{project.description}</p>
              <p>{project.date}</p>
              <p>{project.app_url}</p>
              <p>{project.repo_url}</p>
      </div>
    )
  }
})
