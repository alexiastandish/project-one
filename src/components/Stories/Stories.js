import React, { Component } from 'react'
import axios from 'axios'

class Stories extends Component {
  constructor() {
    super()

    this.state = {
      stories: [],
      // lastestThree: [],
    }
  }

  componentDidMount() {
    axios.get('/api/stories').then(response => {
      console.log(response.data)
      this.setState({ stories: response.data })
    })
  }

  render() {
    // const latestThree = this.state.stories.map(element => {
    //   return <p>{element.title}</p>
    // })

    return (
      <div className="App">
        <h1>Recent Tech News</h1>
        <ul className="latest-stories">
          <div className="storyItem">
            {this.state.stories[0] && (
              <a className="story" href={this.state.stories[0].source.name}>
                {this.state.stories[0].author}
              </a>
            )}
            {this.state.stories[0] && this.state.stories[0].description}
          </div>

          <div className="storyItem">
            {this.state.stories[1] && (
              <a className="story" href={this.state.stories[1].source.name}>
                {this.state.stories[1].author}
              </a>
            )}
            {this.state.stories[1] && this.state.stories[1].description}
          </div>

          <div className="storyItem">
            {this.state.stories[2] && (
              <a className="story" href={this.state.stories[2].source.name}>
                {this.state.stories[2].author}
              </a>
            )}
            {this.state.stories[2] && this.state.stories[2].description}
          </div>
        </ul>
      </div>
    )
  }
}

export default Stories
