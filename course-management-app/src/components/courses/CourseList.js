import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

function CourseList({courses}) {

    function handleClick(id) {
        console.log(id)
    }

    return (
        <Fragment>
            <div className="container">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th >Title</th>
                            <th >AuthorID</th>
                            <th >Category</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.authorName}</td>
                                <td>{course.category}</td>
                                <td>
                                    <button type="button" className="btn btn-success">Update</button>
                                    { "  " }
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

CourseList.propTypes = {
    courses : PropTypes.array.isRequired,
}

export default CourseList

