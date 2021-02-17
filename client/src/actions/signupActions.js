import { NEW_USER } from "./types";

export const createUser = userData => dispatch => {
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => 
        dispatch({
            type: NEW_USER,
            payload: user
        })
    ).catch(error => console.log(error)) 
};