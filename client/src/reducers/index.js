import { combineReducers } from 'redux';
import QuestionsReducer from './questionsReducer';
import questionsReducer from './questionsReducer';

export default combineReducers({
    questions: questionsReducer
});