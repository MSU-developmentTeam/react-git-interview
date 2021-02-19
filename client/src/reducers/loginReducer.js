import { FETCH_USER } from '../actions/types';

const initialState = -{
    items: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}