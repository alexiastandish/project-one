import React, { Component } from 'react'
import axios from 'axios'
import NewTask from '../List/NewTask'
import './List.css'

class List extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.addToList = this.addToList.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.updateItemsState = this.updateItemsState.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.editTask = this.editTask.bind(this)
  }

  componentDidMount() {
    axios.get('/api/items').then(response => {
      this.setState({ items: response.data })
    })
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  addToList() {
    axios
      .post('/api/items', { text: this.state.text })
      .then(this.updateItemsState)
      .then(this.clearInput)
  }

  clearInput() {
    this.setState({ text: '' })
  }

  // create a functiont hat takes a list of items and updates the state of list
  updateItemsState(response) {
    this.setState({ items: response.data })
  }

  removeItem(id) {
    // console.log(id)
    axios.delete(`/api/items/${id}`).then(this.updateItemsState)
  }

  editTask(item) {
    axios.put(`/api/items/${item.id}`, item).then(response => {
      console.log('response', response)
    })
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div className="todo-section">
        <div className="todo-header-section">
          <h1>To Do List</h1>
          <div className="todo-section">
            <input
              className="input-container"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button className="todo-button" onClick={this.addToList}>
              Add to List
            </button>
            {this.state.items.map(item => {
              return (
                <NewTask
                  key={item.id}
                  item={item}
                  removeItem={() => this.removeItem(item.id)}
                  editTask={this.editTask}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default List
