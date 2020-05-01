import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllCourses} from '../../redux/actions/courseActions'
import { getAuthors } from '../../redux/actions/authorAction'
import CourseList from './CourseList';

class CoursesPage extends Component {

    state = {
        course : {
            title : ''
        }
    }

    componentDidMount() {
        this.props.getAllCourses();
        this.props.getAuthors();
    }

    render() {
        return (
            <div className="container">
                <CourseList courses={this.props.courses}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    courses: state.authors.length === 0 ? [] : state.courses.map(course => {
        return {
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).authorName
        }
    })
});

export default connect(mapStateToProps, {
    getAllCourses,
    getAuthors
})(CoursesPage);