import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING, SEARCH_QUESTIONS, ANSWER_QUESTION } from './types';
import { tokenConfig } from './userActions';
import { returnErrors } from './errorActions';
import axios from 'axios';

export const getQuestions = () => dispatch => {
    dispatch(setQuestionsLoading());
    axios.get('/api/questions')
        .then(res => {
            dispatch({
                type: GET_QUESTIONS,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addQuestion = question =>
    (dispatch, getState) => {
        axios.post('/api/questions', question, tokenConfig(getState))
            .then(res =>
                dispatch({
                    type: ADD_QUESTION,
                    payload: res.data,
                })
            ).catch(err => dispatch(returnErrors(err.res.data, err.res.status)));
    };

export const deleteQuestion = id => (dispatch, getState) => {
    axios.delete(`/api/questions/${id}`, tokenConfig(getState)).then(res =>
        dispatch({
            type: DELETE_QUESTION,
            payload: id
        })
    ).catch(err => dispatch(returnErrors(err.res.data, err.res.status)));
};


export const setQuestionsLoading = () => {
    return {
        type: QUESTIONS_LOADING
    }
};

export const searchingQuestion = topic => (dispatch, getState) => {
    axios.get(`/api/questions/${topic}`, tokenConfig(getState)).then(res => {
        console.log(res)
        dispatch({
            type: SEARCH_QUESTIONS,
            payload: topic
        })
    }).catch(err => dispatch(returnErrors(err.res.data, err.res.status)));
}


export const answerQuestion = (answer, id) => (dispatch, getState) => {
    console.log(id)
    axios.put(`/api/questions/${id}`, {answer: answer}, tokenConfig(getState)).then(res => {
        console.log("=============This is ID " + id)
        dispatch({
            type: ANSWER_QUESTION,
            payload: id
        })
    }).catch(err => console.log(err));
};
