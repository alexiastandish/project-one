import React from 'react'
import './App.css'
import Stories from './components/Stories/Stories'
import List from './components/List/List'
import Weather from './components/Weather/Weather'

function App() {
  return (
    <div className="content">
      <div className="header">
        <Weather />
        <div className="logo">
          <img src="http://i63.tinypic.com/o5yeyt.png" />
        </div>
      </div>

      <div className="main-section">
        <Stories />
        <List />
      </div>
    </div>
  )
}

export default App
