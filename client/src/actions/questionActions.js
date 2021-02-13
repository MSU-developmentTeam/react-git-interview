import {  FETCH_QUESTIONS, NEW_QUESTION } from './types';

export const fetchQuestions = () => dispatch => {
    fetch('/profile')
    .then(res => res.json())
    .then(questions =>
        dispatch({
            type: FETCH_QUESTIONS,
            payload: questions
        })
    
    ).catch(error => console.log(error))
};

export const createQuestion = questionData => dispatch => {
    fetch('/api/questions', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(questionData)
    })
    .then(res => res.json())
    .then(post => 
        dispatch({
            type: NEW_QUESTION,
            payload: question 
        })
    ).catch(error => console.log(error)) 
};

//TODO
//export function for all question categories from DB