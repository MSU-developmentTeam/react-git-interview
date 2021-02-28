import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getQuestions, deleteQuestion, answerQuestion } from '../actions/questionActions';
import PropTypes from 'prop-types';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import '../styles/styles.css';
import AnswerModal from './AnswerModal'

class QuestionTwo extends Component {
    static propTypes = {
        getQuestions: PropTypes.func.isRequired,
        answerQuestion: PropTypes.func.isRequired,
        deleteQuestion: PropTypes.func.isRequired,
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

    onAnswerClick = e => {
        console.log(e)
        //this.props.answerQuestion(id);
    }

    render() {
        const { questions } = this.props.question;
        return (
            <Container>
                <div>
                    {questions.map(({ _id, topic, body, answer, keyWords }) => (
                        <Card id="card" key={_id}>
                            <Card.Header id="card-title">
                                {topic}
                            </Card.Header>
                            <Card.Body id="card-body">
                                <Card.Text>
                                    {body}
                                </Card.Text>
                                <Card.Text>
                                    <RiQuestionAnswerFill /> {answer}</Card.Text>
                                    <AnswerModal />
                                <Button id="delete-btn">Delete</Button>
                                <Card.Footer id="keywords-text"># {keyWords}</Card.Footer>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    question: state.question,
});

export default connect(mapStateToProps, { getQuestions, deleteQuestion, answerQuestion })(QuestionTwo);