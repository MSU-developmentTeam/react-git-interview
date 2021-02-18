import { FETCH_USER } from '../actions/types';

const initialState =-{
    items: []
};

export default function(state = initialState, action) {
    return {...state,
    items: action.payload
    }
}