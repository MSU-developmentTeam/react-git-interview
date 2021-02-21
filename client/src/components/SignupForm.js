// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Form from "react-bootstrap/form";
// import { BsPersonPlus } from 'react-icons/bs';
// import "../styles/styles.css";

// export const SignupForm = (props) => {
//     return (
//         <div className="wrapper">
//             <div id="formContent">
//                 <BsPersonPlus id="signup-icon" />
//                 <Form>
//                     <input type="text" id="username" name="username" placeholder="username" />
//                     <input type="text" id="email" name="email" placeholder="email" />
//                     <input type="password" id="password" name="password" placeholder="password" />
//                     <button type="submit" value="Signup">Signup </button>
//                 </Form>
//             </div>
//         </div>
//     )
// }

// SignupForm.propTypes = {
//     fetchUser: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired
// }

// const mapStateToProps = (state) => ({
//     user: state.user.item
// })

// // const mapDispatchToProps = {

// // }

// export default connect(mapStateToProps, { } /*mapDispatchToProps*/)(SignupForm)