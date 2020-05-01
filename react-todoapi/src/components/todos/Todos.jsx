import React, { Component } from 'react'
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <TodoItems
                key={todo.id}
                todoItem={todo}
                handleCheckboxChange={this.props.handleCheckboxChange}
                removeItem={this.props.removeItem}
            />
        ))
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default Todos
