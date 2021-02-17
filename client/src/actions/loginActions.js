import { FETCH_USER } from "./types"

export const fetchUser = () => dispatch => {
    fetch('/login')
    .then(res => res.json())
    .then(user =>
        dispatch({
            type: FETCH_USER,
            payload: user
        })
    
    ).catch(error => console.log(error))
};

