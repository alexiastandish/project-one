const axios = require('axios')

let weather = []

const getWeather = (req, res) => {
  axios
    .get(
      'http://api.openweathermap.org/data/2.5/weather?id=4684888&apiKey=1ab412a13c41fe2590bcbe115d7c7868'
    )
    .then(response => {
      const weather = res.status(200).json(response.data)
      return weather
    })
}

module.exports = {
  getWeather,
}
