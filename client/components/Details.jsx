import React from 'react'

export default React.createClass({
  propTypes: {
    projects: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      repo_url: React.PropTypes.string,
      app_url: React.PropTypes.string,
      date: React.PropTypes.string
    })),
    photos:
    {photo_id: React.PropTypes.number,
     url: React.PropTypes.string,
     caption: React.PropTypes.string,
     project_id: React.PropTypes.number
    }
  },
  render () {
    return (
      <div>
        <h2 key={this.props.projects.id}>{this.props.projects.title}</h2>
        <p>{this.props.projects.title}</p>
        <p>{this.props.projects.description}</p>
        <p>{this.props.projects.date}</p>
        <p>{this.props.projects.app_url}</p>
        <p>{this.props.projects.repo_url}</p>
        <img src={this.props.photos.url}/>
      </div>
    )
  }
})
