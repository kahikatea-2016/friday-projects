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
        <h2 key={this.props.id}>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>{this.props.date}</p>
        <p>{this.props.appUrl}</p>
        <p>{this.props.repoUrl}</p>
        <img src={this.props.url}/>
        <p>{this.props.caption}</p>
        <button>Edit a project</button>
      </div>
    )
  }
})
