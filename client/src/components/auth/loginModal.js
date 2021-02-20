import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import "../../styles/styles.css";

class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        message: null,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'LOGIN_FAIL') {
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
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        const user = {
            email,
            password
        };

        this.props.login(user);
    };

    render() {
        return (
            <div>
                <Button id='login-btn' onClick={this.toggle} href="#">Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody id='formContent'>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
                        <FiLogIn id="login-icon" />
                        <Form onsubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='username'>username</Label>
                                <input type="text" id="username" name="username" placeholder="username" />
                                <Label for='password'>Password</Label>
                                <input type="password" id="password" name="password" placeholder="password" />
                                <button type="submit" value="Login">Login</button>

                                <div id="formFooter">
                                    <a className="underlineHover" href="/signup">Create Account</a>
                                </div>
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



export default connect(mapStateToProps, { login, clearErrors })(LoginModal);