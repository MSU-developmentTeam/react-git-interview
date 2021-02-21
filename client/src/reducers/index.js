import { combineReducers } from 'redux';
import questionReducer from './questionsReducer.js';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

export default combineReducers({
    question: questionReducer,
    error: errorReducer,
    user: userReducer
})