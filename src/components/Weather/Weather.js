import React, { Component } from 'react'
import axios from 'axios'
import './Weather.css'

class Weather extends Component {
  constructor() {
    super()

    this.state = {
      weather: {},
      convertedTemp: [],
      skies: [],
    }
  }

  componentDidMount() {
    axios.get('/api/weather').then(response => {
      const weatherOutput = response.data
      this.setState({ weather: weatherOutput })
    })

    axios.get('/api/weather').then(response => {
      const weatherOutput = response.data.main.temp
      const weatherRounded = weatherOutput / 10
      const celciusToFahrenheit = Math.floor(weatherRounded * (9 / 5) + 32)
      // console.log('cel', celciusToFahrenheit)
      // console.log('weather', weatherOutput)
      // console.log('weather rounded', weatherRounded)
      this.setState({ convertedTemp: celciusToFahrenheit })
    })

    axios.get('/api/weather').then(response => {
      const currentSkies = response.data.weather[0].description
      this.setState({ skies: currentSkies })
    })
  }

  render() {
    console.log('this.state.convertedTemp', this.state.convertedTemp)
    console.log('this.state.weather', this.state.weather)
    return (
      <div className="weather-section">
        <h1>Dallas Weather</h1>
        <p>{this.state.convertedTemp}</p>
        <p>{this.state.skies}</p>
      </div>
    )
  }
}
export default Weather
