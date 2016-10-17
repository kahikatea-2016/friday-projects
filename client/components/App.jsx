import React from 'react'
import request from 'superagent'

import List from './List'

export default React.createClass({
  getInitialState () {
    return {projects: []}
  },

  componentDidMount () {
    var self = this
    request
      .get('/v1/projects')
      .end(function (err, res) {
        if (err) {
          console.error(err)
        } else {
          console.log(res.body)
          self.setState({projects: res.body})
        }
      })
  },

  render () {
    return (
      <div>
        <h1>Friday Projects</h1>
        <List projects={this.state.projects} />
        <button>Add a project</button>
      </div>
    )
  }
})
