const axios = require('axios')

let stories = []

const getStory = (req, res) => {
  axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=069097a483634bc5b1fa161c470c6b59'
    )
    .then(response => {
      const stories = res.status(200).json(response.data.articles)
      return stories
    })
}

module.exports = {
  getStory,
}
