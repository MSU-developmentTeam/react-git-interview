import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/questionActions';

export class QuestionCard extends Component {
    componentWillMount() {
        this.props.fetchQuestions();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newQuestion) {
            this.props.questions.unshift(nextProps.newQuestion);
        }
    }

    render() {
        const questionItems = this.props.questions.map(question => (
            <div key={question.id}>
                <h3>{question.title}</h3>
                <p>{question.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Questions</h1>
                {questionItems}
            </div>
        );
    }
}

QuestionCard.propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    newQuestion: PropTypes.object
};


const mapStateToProps = (state) => ({
    questions: state.questions.items,
    newQuestion: state.questions.item,
})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, { fetchQuestions}/*, mapDispatchToProps*/)(QuestionCard)
