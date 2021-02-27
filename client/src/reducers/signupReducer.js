import { NEW_USER } from '../actions/types';

const initialState = -{
    item: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
};