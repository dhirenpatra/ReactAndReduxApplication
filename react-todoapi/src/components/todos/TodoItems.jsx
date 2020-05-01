import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItems extends Component {

    getStyle = () => {
        return {
            backgroundColor : "#f4f4f4",
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration : this.props.todoItem.completed === true ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todoItem;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.handleCheckboxChange.bind(this,id)}/> {"  "} 
                    {title} 
                    <button type="submit" style={btnStyle} onClick={this.props.removeItem.bind(this,id)}> X </button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : "5px 10px",
    borderRadius : '80%',
    cursor : 'pointer',
    float : 'right'
}

TodoItems.propTypes = {
    todoItem : PropTypes.object.isRequired,
    handleCheckboxChange : PropTypes.func.isRequired,
    removeItem : PropTypes.func.isRequired
}

export default TodoItems;