import { GET_AUTHOR_SUCCESS } from '../actions/actionTypes'

export default function authorsReducer(state = [], action) {
    const { type, authors} = action;
    switch(type) {
        case GET_AUTHOR_SUCCESS :
            return authors
        default :
            return state;
    }
}