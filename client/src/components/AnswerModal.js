import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { answerQuestion } from '../actions/questionActions';
import "../styles/styles.css";
import { BsFillQuestionCircleFill } from 'react-icons/bs';

class AnswerModal extends Component {
    state = {
        modal: false,
        answer: ''
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        answerQuestion: PropTypes.func.isRequired
    };


    componentDidUpdate(prevProps) {
        const { isAuthenticated } = this.props;

        // If authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.props.questionId);
        const { answer } = this.state;
        let id = this.props.questionId;
        const newAnswer = {
            answer,
            id
        };

        this.props.answerQuestion(newAnswer);
    };
    render() {
        return (
            <div>
                <Button id="answer-btn" onClick={this.toggle} href="#"> Answer</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}><BsFillQuestionCircleFill />  Answer</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='answer'>Answer</Label>
                                <Input
                                    type='answer'
                                    name='answer'
                                    id='answer'
                                    placeholder='answer'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }} block>
                                    Post Answer 
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,

});
export default connect(mapStateToProps,{ answerQuestion })(AnswerModal);

