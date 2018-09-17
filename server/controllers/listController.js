const items = []
let id = 0

const getList = (req, res) => {
  const listOutput = res.status(200).json(items)
  return listOutput
}

const createItem = (req, res) => {
  console.log(req.body)
  const { text } = req.body
  items.push({ text: text, id: id })
  id++
  return res.status(200).send(items)
}

const deleteItem = (req, res) => {
  const deleteID = req.params.id
  const itemIndex = items.findIndex(item => item.id === deleteID)
  items.splice(itemIndex, 1)
  return res.status(200).send(items)
}

const updateItem = (req, res) => {
  const { text } = req.body
  const updateID = Number(req.params.id)
  const updateItemIndex = items.findIndex(item => item.id === updateID)

  items[updateItemIndex].text = text
  return res.status(200).send(items)
}

module.exports = {
  getList,
  createItem,
  deleteItem,
  updateItem,
}
