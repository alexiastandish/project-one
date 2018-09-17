const express = require('express'),
  axios = require('axios'),
  port = 3001,
  bodyParser = require('body-parser'),
  newsController = require('./controllers/newsController'),
  listController = require('./controllers/listController'),
  weatherController = require('./controllers/weatherController')

const app = express()

app.use(bodyParser.json())

app.get('/api/stories', newsController.getStory)
app.get('/api/items', listController.getList)
app.get('/api/weather', weatherController.getWeather)
app.post('/api/items', listController.createItem)
app.delete('/api/items/:id', listController.deleteItem)
app.put('/api/items/:id', listController.updateItem)

app.listen(port, () => console.log(`Marco... polo on port ${port}`))
