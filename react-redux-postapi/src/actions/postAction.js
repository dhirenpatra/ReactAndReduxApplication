import {FETCH_POSTS, ADD_POST} from '../types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => dispatch( {
                type : FETCH_POSTS,
                payload : data
            } )
    );
}

export const addPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            } )
            .then(response => response.json())
            .then(post => dispatch( {
                type : ADD_POST,
                payload : post
            } )
    );
}