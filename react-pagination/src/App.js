import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import './bootstrap.css';

import Todos from './components/pagination/Todos';
import Pagination from './components/pagination/Pagination';

const App = () => {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [todoPerPage] = useState(10)

    useEffect( () => {
        const fetchTodos = async () => {
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTodos(response.data);
            setLoading(false);
        }

        fetchTodos();
    }, []);

    const indexOfLastTodo = currentPage * todoPerPage
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage
    const todosToDisplay = todos.slice(indexOfFirstTodo, indexOfLastTodo)

    const paginate = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <Todos todos={todosToDisplay} loading={loading} />
            <Pagination todosPerPage={todoPerPage} 
                        totalTodos={todos.length} 
                        paginate={paginate}/>
        </div>
    )
}

export default App;