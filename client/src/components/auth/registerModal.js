import React, { Component } from 'react';
import {  Button,  Modal,  ModalHeader,  ModalBody,  Form,  FormGroup,  Label,  Input,  NavLink,  Alert} from 'reactstrap';
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
      this.setState({ [e.target.username]: e.target.value });
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
            <ModalHeader toggle={this.toggle}>Register</ModalHeader>
            <ModalBody>
              {this.state.msg ? (
                <Alert color='danger'>{this.state.msg}</Alert>
              ) : null}
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for='name'>Userame</Label>
                  <Input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
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
                  <Button color='dark' style={{ marginTop: '2rem' }} block>
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
  export default connect(
    mapStateToProps,
    { register, clearErrors }
  )(RegisterModal);

// class RegisterModal extends Component {
//     state = {
//         modal: false,
//         username: '',
//         email: '',
//         password: '',
//         message: null,
//     }

//     static propTypes = {
//         isAuthenticated: PropTypes.bool,
//         error: PropTypes.object.isRequired,
//         register: PropTypes.func.isRequired,
//         clearErrors: PropTypes.func.isRequired
//     };

//     componentDidUpdate(prevProps) {
//         const { error, isAuthenticated } = this.props;
//         if (error !== prevProps.error) {
//             // Check for register error
//             if (error.id === 'REGISTER_FAIL') {
//                 this.setState({ msg: error.msg.msg });
//             } else {
//                 this.setState({ msg: null })
//             }
//         }

//         if (this.state.modal) {
//             if (isAuthenticated) {
//                 this.toggle();
//             }
//         }
//     }

//     toogle = () => {

//         this.props.clearErrors();

//         this.setState({
//             modal: true
//         })
//     }

//     onChange = e => {
//         this.setState({ [e.target.username]: e.target.value });
//         this.setState({ [e.target.password]: e.target.value });
//         this.setState({ [e.target.email]: e.target.value });
//     }

//     onSubmit = e => {
//         e.preventDefault()
//         const { username, email, password } = this.state;

//         // Create user object
//         const newUser = {
//             username,
//             email,
//             password
//         };

//         // Attempt to Register user
//         this.props.register(newUser);

//     }

//     render() {
//         return (
//             <div>
//                 <Button id='signup-btn' onClick={this.toggle } href="#">Register</Button>
//                 <Modal isOpen={this.state.modal} toggle={this.toggle}>

//                     <Modal.Header toggle={this.toggle}>Register</Modal.Header>
//                     <Modal.Body id='formContent'>
//                         {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
//                         <BsPersonPlus />
//                         <Form onsubmit={this.onSubmit}>
//                             <FormGroup>
//                                 <label for='name'>Username</label>
//                                 <input type="text" id="username" name="username" placeholder="username" />
//                                 <label for='email'>Email</label>
//                                 <input type="text" id="email" name="email" placeholder="email" />
//                                 <label for='name'>Email</label>
//                                 <input type="password" id="password" name="password" placeholder="password" />
//                                 <Button type="submit" value="Signup">Signup </Button>
//                             </FormGroup>
//                         </Form>
//                     </Modal.Body>

//                 </Modal>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     isAuthenticated: state.user.isAuthenticated,
//     error: state.error
// })



// export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);