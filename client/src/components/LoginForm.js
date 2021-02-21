// import React from 'react';
// import { connect } from 'react-redux';
// import Form from "react-bootstrap/form";
// import { FiLogIn } from 'react-icons/fi';
// import { fetchUser } from '../actions/loginActions';
// import PropTypes from 'prop-types';
// import "../styles/styles.css";

// //exporting Loginform
// export const LoginForm = (props) => {
//     return (
//         <div className="wrapper">
//             <div id="formContent">
//                 <FiLogIn id="login-icon" />
//                 <Form>
//                     <input type="text" id="username" name="username" placeholder="username" />
//                     <input type="password" id="password" name="password" placeholder="password" />
//                     <button type="submit" value="Login">Login</button>
//                 </Form>

//                 <div id="formFooter">
//                     <a className="underlineHover" href="/signup">Create Account</a>
//                 </div>

//             </div>
//         </div>
//     )
// }

// LoginForm.propTypes = {
//     fetchUser: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired
// }


// const mapStateToProps = (state) => ({
//     username: state.username.items,
//     password: state.password.items
// })

// // const mapDispatchToProps = {

// // }

// export default connect(mapStateToProps, { fetchUser }/*mapDispatchToProps*/)(LoginForm)
