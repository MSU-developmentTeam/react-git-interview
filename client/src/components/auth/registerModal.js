import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BsPersonPlus } from 'react-icons/bs';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'
import "../../styles/styles.css";


class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        message: null,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErros: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: err.msg.msg });
            } else {
                this.setState({ msg: null })
            }
        }

        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    toogle = () => {

        this.props.clearErrors();

        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({ [e.target.username]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault()
        const { username, email, password } = this.state;

        // Create user object
        const newUser = {
            username,
            email,
            password
        };

        // Attempt to Register user
        this.props.register(newUser);

    }

    render() {
        return (
            <div>
                <Button id='signup-btn' onClick={this.toggle} href="#">Register</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody id='formContent'>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
                        <BsPersonPlus />
                        <Form onsubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input type="text" id="username" name="username" placeholder="username" />
                                <Label for='email'>Email</Label>
                                <Input type="text" id="email" name="email" placeholder="email" />
                                <Label for='name'>Email</Label>
                                <Input type="password" id="password" name="password" placeholder="password" />
                                <Button type="submit" value="Signup">Signup </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})



export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);