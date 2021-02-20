import { combineReducers } from 'redux';
import questionReducer from './questionsReducer.js';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    question: questionReducer,
    error: errorReducer,
    auth: authReducer
})