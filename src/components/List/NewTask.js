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
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div className="item-list">
        {this.state.isEditing ? (
          <input onChange={this.handleEditing} value={this.state.currentEditState} />
        ) : (
          <p>{this.props.item.text}</p>
        )}
        <button onClick={this.props.removeItem}>Delete</button>
        <button onClick={this.allowEditing}>Edit</button>
      </div>
    )
  }
}

export default NewTask
