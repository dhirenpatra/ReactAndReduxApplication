import React from 'react'

const Todos = ({ todos, loading }) => {

    if(loading) {
        return <h2> Page Loading... Please wait </h2>
    }
    return (
        <ul className="list-group mb-4">
            {
                todos.map(todo => (
                    <li key={todo.id} className='list-group-item'> {todo.title} </li>
                ))
            }
        </ul>
    )
}

export default Todos

