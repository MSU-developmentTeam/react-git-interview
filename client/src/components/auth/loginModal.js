import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FiLogIn } from 'react-icons/fi';
import { login } from '../../actions/userActions';
import { clearErrors } from '../../actions/errorActions';
import "../../styles/styles.css";

class LoginModal extends Component {
    state = {
        modal: false,
        username: '',
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
                this.setState({ msg: error.msg.msg });
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
        e.preventDefault();
        const{ username, password } = this.state;

        const user = {
            username,
            password
        };

        this.props.login(user);
    };

    render() {
        return (
            <div>
                <Button id='login-btn' onClick={this.toggle} href="#">Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <Modal.Header toggle={this.toggle}>Login</Modal.Header>
                    <Modal.Body id='formContent'>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
                        <FiLogIn id="login-icon" />
                        <Form onsubmit={this.onSubmit}>
                            <FormGroup>
                                <label for='username'>username</label>
                                <input type="text" id="username" name="username" placeholder="username" />
                                <label for='password'>Password</label>
                                <input type="password" id="password" name="password" placeholder="password" />
                                <Button type="submit" value="Login">Login</Button>

                                <div id="formFooter">
                                    <a className="underlineHover" href="/signup">Create Account</a>
                                </div>
                            </FormGroup>
                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    error: state.error
})



export default connect(mapStateToProps, { login, clearErrors })(LoginModal);