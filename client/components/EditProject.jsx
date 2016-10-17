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
    photos: {
      photo_id: React.PropTypes.number,
      url: React.PropTypes.string,
      caption: React.PropTypes.string,
      project_id: React.PropTypes.number
    }
  },

  render () {
    return (
      <div className="">
        <h1>Edit Project</h1>
        <form action="">
          <input type="text" name="title" placeholder={this.props.title} value=" Project Title"/><br/>
          <input type="text" name="teamName" placeholder="Team Name" value="Team Name"/><br/>
          <input type="text" name="description" placeholder={this.props.description} value="Description"/><br/>
          <input type="date" name="date" placeholder={this.props.date}/><br/>
          <input type="url" name="url" placeholder={this.props.repo_url} value="Repo Url"/><br/>
          Team Member:<br/>
          <select multiple name="teamMembers">
            <option value="andrew">Andrew</option>
            <option value="jaive">Jaive</option>
            <option value="sam">Sam</option>
            <option value="tealiie">Tealiie</option>
            <option value="tim">Tim</option>
            <option value="tina">Tina</option>
          </select><br/>
          Photos: <br/>
          <input type="file" name="photos" placeholder={this.props.url}/><br/>
          <input type="text" name="caption" placeholder={this.props.caption} value="Photo Caption"/><br/>
          <input type="submit" value="Edit Project"/>
        </form>
      </div>
    )
  }
})
