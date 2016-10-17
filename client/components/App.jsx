import React from 'react'
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
  render () {
    return (
      <div>
        <h1>Friday Projects</h1>
        <List projects={projects} />
        <Details
          projects={projects[0]}
          title={projects[0].title}
          date={projects[0].date}
          description={projects[0].description}
          url={projects[0].photos.url}
          caption={projects[0].photos.caption}
        />
        <button>Add a project</button>
        <p> sdhfbusdf </p>
      </div>
    )
  }
})
