import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addQuestion } from "../actions/questionActions";
// import  isAuthenticated  from '../reducers/userReducer';
import PropTypes from "prop-types";
import { BsFillQuestionCircleFill } from 'react-icons/bs';
class QuestionModal extends Component {
  state = {
    modal: false,
    username: "",
    topic: "",
    body: "",
    answer: "",
    keyWords: [],
    question: {},
    isAuthenticated: true
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      username: this.state.username,
      topic: this.state.topic,
      body: this.state.body,
      answer: this.state.answer,
      keyWords: this.state.keyWords,
    };


    // Add Question via addQuestion action
    this.props.addQuestion(newQuestion);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.state.isAuthenticated ? (
          <Button id="post-btn" onClick={this.toggle} >Post Question</Button>
        ) : (
            <h4 className="mb-3 ml-4">Please login to Manage Questions</h4>
          )}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalHeader toggle={this.toggle}> < BsFillQuestionCircleFill />  Ask Your Question </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="question"></Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Add Your Username"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="topic"
                  id="topic"
                  placeholder="Add Topic"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="body"
                  id="body"
                  placeholder="Enter Question"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="answer"
                  id="answer"
                  placeholder="Answer (optional)"
                  onChange={this.onChange}
                />
                <Input
                  list="keyWords"
                  type="text"
                  name="keyWords"
                  id="keyWords"
                  placeholder="Keywords (optional)"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Submit Question
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  question: state.question,
  isAuthenticated: state.isAuthenticated,
});
export default connect(mapStateToProps, { addQuestion })(QuestionModal);
