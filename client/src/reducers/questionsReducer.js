import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING, SEARCH_QUESTIONS, ANSWER_QUESTION } from '../actions/types';
const initialState = {
    questions: [],
    loading: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
                loading: false
            }
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question._id !== action.payload)
            }
        case ADD_QUESTION:
            return {
                ...state,
                questions: [action.payload, ...state.questions]
            }
        case QUESTIONS_LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_QUESTIONS:
            return {
                ...state,
                questions: state.questions.filter(question => question.topic.toLowerCase().replace(/\s/g, '') === action.payload.toLowerCase())
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                questions: [action.payload, ...state.questions]
            }
        default:
            return state
    }
}