import React from 'react'

const Pagination = ({ todosPerPage, totalTodos, paginate }) => {

    const pageNumber = [];

    for(let i=1; i<= Math.ceil(totalTodos/todosPerPage) ; i++) 
        pageNumber.push(i);

    return (
        <nav>
            <ul className="pagination">
                {   pageNumber.map(page => (
                        <li key={page} className="page-item"> 
                            <a onClick={() => paginate(page)} className='page-link' href="!#"> {page} </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination
