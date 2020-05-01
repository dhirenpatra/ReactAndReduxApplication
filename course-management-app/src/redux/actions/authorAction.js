import { GET_AUTHOR_SUCCESS } from './actionTypes';
import axios from 'axios';
import { setAlert } from './alertAction'

export const getAuthors = () => async dispatch => {
    try {
        const author = await axios.get(`http://localhost:9090/authors`)
        dispatch({
            type: GET_AUTHOR_SUCCESS,
            authors : author.data
        })
    } catch (err) {
        console.log('########');
        console.log(err.message);
        console.log('########');
        dispatch(setAlert(err.message, 4000));
    }
} 