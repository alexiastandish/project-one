const express = require('express'),
  axios = require('axios'),
  port = 3001,
  bodyParser = require('body-parser'),
  newsController = require('./controllers/newsController')
listController = require('./controllers/listController')

const app = express()

app.use(bodyParser.json())

// app.get('/api/test')

app.get('/api/stories', newsController.getStory)
app.get('/api/items', listController.getList)
app.post('/api/items', listController.createItem)
app.delete('/api/items/:id', listController.deleteItem)

// app.get('/api/stories', newsController.getLatestStories)

app.listen(port, () => console.log(`Marco... polo on port ${port}`))
