import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING } from '../actions/types';
const initialState = {
    questions: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_QUESTION:
            return {
                ...state,
                items: state.items.filter(question => question._id != action.payload)
            }
        case ADD_QUESTION:
            return {
                ...state,
                items: [action.payload, ...state.questions]
            }
        case QUESTIONS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}