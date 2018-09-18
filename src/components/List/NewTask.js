import React, { Component } from 'react'
import './NewTask.css'

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
          <div className="input-item">
            <input
              className="edit-input"
              onChange={this.handleEditing}
              value={this.state.currentEditState}
            />
            <button
              className="submit-button"
              onClick={() => this.handleSubmitChange(this.props.item.id)}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="item-and-buttons">
            <p>{this.props.item.text}</p>
            <div className="buttons" valign="middle">
              <button className="delete-button" onClick={this.props.removeItem}>
                <img src="http://i68.tinypic.com/23rjxp1.png" />
              </button>
              <button className="editing-buttons" onClick={this.allowEditing}>
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default NewTask
