import { NEW_USER } from '../actions/types';

const initialState =-{
    item: {}
};

export default function(state = initialState, action) {
    return {...state,
    item: action.payload
    }
}