import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, Alert } from 'react-bootstrap';
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
        message: null,
    }

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

                    <Modal.Header toggle={this.toggle}>Register</Modal.Header>
                    <Modal.Body id='formContent'>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
                        <BsPersonPlus />
                        <Form onsubmit={this.onSubmit}>
                            <FormGroup>
                                <label for='name'>Username</label>
                                <input type="text" id="username" name="username" placeholder="username" />
                                <label for='email'>Email</label>
                                <input type="text" id="email" name="email" placeholder="email" />
                                <label for='name'>Email</label>
                                <input type="password" id="password" name="password" placeholder="password" />
                                <Button type="submit" value="Signup">Signup </Button>
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



export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);