import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BsPersonPlus } from 'react-icons/bs';
import { register } from '../../actions/userActions';
import { clearErrors } from '../../actions/errorActions'
import "../../styles/styles.css";

class RegisterModal extends Component {
    state = {
        modal: false,
        username: '',
        email: '',
        password: '',
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        // If authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }
    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        // Create user object
        const newUser = {
            username,
            email,
            password
        };
        // Attempt to register
        this.props.register(newUser);
    };
    render() {
        return (
            <div>
                <NavLink id="signup-btn" onClick={this.toggle} href='#'>
                    Register
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <BsPersonPlus id="signup-icon" ></BsPersonPlus>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (
                            <Alert color='danger'>{this.state.msg}</Alert>
                        ) : null}
                        <Form /*onSubmit={this.onSubmit}*/>
                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input
                                    type='text'
                                    name='username'
                                    id='name'
                                    placeholder='Username'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Label for='email'>Email</Label>
                                <Input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Label for='password'>Password</Label>
                                <Input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='Password'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }} onClick={this.onSubmit} block>
                                    Register
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
    // isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
export default connect( mapStateToProps, { register, clearErrors })(RegisterModal);
