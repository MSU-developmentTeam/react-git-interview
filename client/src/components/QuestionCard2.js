import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
//import { TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getQuestions, deleteQuestion } from '../actions/questionActions';
import PropTypes from 'prop-types';
import '../styles/styles.css';

class QuestionTwo extends Component {
    static propTypes = {
        getQuestions: PropTypes.func.isRequired,
        question: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    state = {
        questions: []
    }

    componentDidMount() {
        this.props.getQuestions();
    }

    onDeleteClick = id => {
        this.props.deleteQuestion(id)
    }



    render() {
        const { questions } = this.props.question;
        console.log(this.props)
        return (
            <Container>
                <div>
                    {/* <TransitionGroup className="shopping-list"> */}
                        {questions.map(({_id, topic, body, answer, keyWords }) => (
                            <p key={ _id}>
                               { topic}{body}{answer}{keyWords}
                            </p>
                        ))}
                    {/* </TransitionGroup> */}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    question: state.question,
})

export default connect(mapStateToProps, { getQuestions, deleteQuestion })(QuestionTwo);