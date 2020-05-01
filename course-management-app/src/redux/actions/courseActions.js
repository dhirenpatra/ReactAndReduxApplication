import { CREATE_COURSE, GET_COURSES_SUCCESS} from './actionTypes';
import { setAlert } from './alertAction'
import axios from 'axios';

export const createCourse = course => dispatch => {
    dispatch({
        type: CREATE_COURSE,
        course
    });
}

export const getAllCourses = () => async dispatch => {
    try {
        const courses = await axios.get('http://localhost:9090/courses');
        dispatch({
            type: GET_COURSES_SUCCESS,
            courses: courses.data
        });
    } catch(err) {
        console.error(err.message);
        dispatch(setAlert(err.message, 4000));
    }
}