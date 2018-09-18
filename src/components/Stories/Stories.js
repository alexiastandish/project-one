import React, { Component } from 'react'
import axios from 'axios'
import './Stories.css'

class Stories extends Component {
  constructor() {
    super()

    this.state = {
      stories: [],
      searchStories: [],
    }
  }

  componentDidMount() {
    axios.get('/api/stories').then(response => {
      const storiesOutput = response.data.slice(0, 3)
      this.setState({ stories: storiesOutput })
    })

    axios.get('/api/stories').then(response => {
      const searchStoriesOutput = response.data
      this.setState({ searchStories: searchStoriesOutput })
    })
  }

  render() {
    return (
      <div className="stories-section">
        <div className="stories-header-section">
          <h1>Recent Tech News</h1>
        </div>
        <ul className="latest-stories">
          <div className="story-item">
            {this.state.stories.map(story => {
              return (
                <div className="story-item" key={story.url}>
                  <a className="story" href={story.url}>
                    {story.title}
                  </a>
                  <br />
                  {story.description}
                </div>
              )
            })}
          </div>
        </ul>
      </div>
    )
  }
}

export default Stories
