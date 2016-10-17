import React from 'react'
import request from 'superagent'

import List from './List'
import Details from './Details'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is project one',
    date: '20/04/2016',
    appUrl: 'www.facebook.com',
    repoUrl: 'https://github.com/facebook',
    photos: {
      url: 'https://c2.staticflickr.com/8/7446/11127634193_1d074d28a3_k.jpg',
      caption: 'This is a corgi, because I can.'
    },
    teamMembers: {
      name: 'Bob'
    }
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is project two'
  }
]

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
