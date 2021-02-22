import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

    const 

    componentDidMount() {
        this.props.getQuestions();
    }

    onDeleteClick = id => {
        this.props.deleteQuestion(id)
    }
    render() {
        const { questions } = this.props.question;

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {questions.map(({ _id, topic, body, answer, keyWords }) => (
                            <CSSTransition key={_id} timeout={500} className='fade'>
                                <ListGroupItem>
                                    {this.props.isAuthenticated ? <Button className='remove-btn' color='danger' size='sm' onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button> : null}
                                    { topic }{ body }{ answer }{ keyWords }                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    question: state.question,
})

export default connect(mapStateToProps, { getQuestions, deleteQuestion })(QuestionTwo);