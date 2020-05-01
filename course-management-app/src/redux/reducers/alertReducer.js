import { ALERT, REMOVE_ALERT } from '../actions/actionTypes';

const inititalState = []

export default function alert (state = inititalState, action) {
    const { type, payload } = action;
    switch(type) {
        case ALERT:
            return [...state, payload]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)
        default :
            return state
    }
}