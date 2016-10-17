import React from 'react'

export default React.createClass({
  propTypes: {
    project: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      repoUrl: React.PropTypes.string,
      appUrl: React.PropTypes.string,
      date: React.PropTypes.string,
      photos: React.PropTypes.arrayOf(React.PropTypes.shape({
        photoId: React.PropTypes.number,
        url: React.PropTypes.string,
        caption: React.PropTypes.string,
        projectId: React.PropTypes.number
      })),
      teamMembers: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string
      }))
    }))
  },

  render () {
    return (
      <div>
        <h2>{this.props.project.title}</h2>
        <p>{this.props.project.description}</p>
        <p>{this.props.project.date}</p>
        <p>{this.props.project.appUrl}</p>
        <p>{this.props.project.repoUrl}</p>
        <button>Edit a project</button>
      </div>
    )
  }
})
