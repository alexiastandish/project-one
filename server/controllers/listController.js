let items = [],
  id = 0

const getList = (req, res) => {
  return res.status(200).json(items)
}

const createItem = (req, res) => {
  console.log(req.body)
  const { text } = req.body
  items.push({ text: text, id: id })
  id++
  return res.status(200).send(items)
}

// const updateMessage = (req, res) => {
//   const { text } = req.body
//   const updateId = req.params.id
//   const messageIndex = messages.findIndex(message => message.id == updateId)

//   messages[messageIndex].text = text

//   console.log(messages)

//   return res.status(200).send(messages)
// }

module.exports = {
  getList,
  createItem,
  // updateItem,
}
