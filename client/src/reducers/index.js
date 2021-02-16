import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    questions: questionsReducer,
    signup: signupReducer,
    login: loginReducer
});