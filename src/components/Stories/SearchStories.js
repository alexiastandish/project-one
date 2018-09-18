import React, { Component } from 'react'

class SearchStories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storiesFilter: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({
      storiesFilter: e.target.value,
    })
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Story: </label>
        <input
          type="text"
          id="filter"
          value={this.state.storiesFilter}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SearchStories
