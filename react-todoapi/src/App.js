import React, { Component } from 'react'
import './App.css'

import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import Header from './components/layout/Header'
import About from './components/layout/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>
            this.setState({
                todos: res.data
            })
        )
    }

    handleCheckboxChange = id => {
        console.log('Parent handleCheckboxChange method triggered ... ', id)
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }

    removeItem = id => {
        console.log('Parent removeItem method triggered ... ', id)
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    }

    addTodo = title => {
        axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false
            })
            .then(res =>
                this.setState({
                    todos: [res.data, ...this.state.todos]
                })
            )
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={props => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        handleCheckboxChange={this.handleCheckboxChange}
                                        removeItem={this.removeItem}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
