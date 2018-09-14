import React, { Component } from 'react'
import './App.css'
import Stories from './components/Stories/Stories'
import List from './components/List/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stories />
        <List />
      </div>
    )
  }
}

export default App
