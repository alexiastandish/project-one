import React, { Component } from 'react'
import axios from 'axios'
import NewTask from '../List/NewTask'

class List extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios.get('/api/items').then(response => {
      console.log(response.data)
      this.setState({ items: response.data })
    })
  }

  render() {
    const listItems = this.state.items.map(element => {
      return <p>{element}</p>
    })
    const { text } = this.props

    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        <NewTask task={listItems} />
      </div>
    )
  }
}

export default List

// render() {
//   const { id, text, time, edit, remove } = this.props;
//   const { editting } = this.state;
//   console.log( id, text );
//   return (
//     <div className="Message__container">
//       <span className="Message__time">{time}</span>
//       {
//         editting
//         ?
//           <input className="Message__input" value={ this.state.text } onChange={ this.handleChange } onKeyPress={ this.edit } />
//         :
//           <span className="Message__text">{text}</span>
//       }
//       <span className="Message__edit" onClick={ () => this.setState({ editting: !this.state.editting, text }) }> <FaPencil /> </span>
//       <span className="Message__delete" onClick={ () => remove( id ) }> <FaTrash /> </span>
//     </div>
//   )
// }
