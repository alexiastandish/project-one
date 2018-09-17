import React, { Component } from 'react'

class NewTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      currentEditState: props.item.text,
    }
    this.allowEditing = this.allowEditing.bind(this)
    this.handleEditing = this.handleEditing.bind(this)
  }

  allowEditing() {
    this.setState({ isEditing: true })
  }

  handleEditing(event) {
    this.setState({ currentEditState: event.target.value })
  }

  handleSubmitChange(id) {
    this.props.editTask(id, this.state.currentEditState)
    this.setState({ isEditing: false })
  }

  render() {
    return (
      <div className="item-list">
        {this.state.isEditing ? (
          <div>
            <input onChange={this.handleEditing} value={this.state.currentEditState} />
            <button onClick={() => this.handleSubmitChange(this.props.item.id)}>Submit Edit</button>
          </div>
        ) : (
          <div>
            <p>{this.props.item.text}</p>
            <button onClick={this.props.removeItem}>Delete</button>
            <button onClick={this.allowEditing}>Edit</button>
          </div>
        )}
      </div>
    )
  }
}

export default NewTask
