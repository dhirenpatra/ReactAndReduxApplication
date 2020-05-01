import {  ALERT,REMOVE_ALERT } from './actionTypes';
import uuid from 'uuid'

export const setAlert = ({message, timeout=3000}) => dispatch => {
    const id = uuid.v4()
    dispatch({
        type: ALERT,
        payload: {
            message,
            id
        }
    })
    setTimeout(
        () =>
            dispatch({
                type: REMOVE_ALERT,
                payload: id
            }),
        timeout
    )
}