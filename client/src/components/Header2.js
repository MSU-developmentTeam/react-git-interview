import React, { Component, Fragment } from 'react';
import { NavItem, Jumbotron, Container, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import RegisterModal from './auth/registerModal';
import LoginModal from './auth/loginModal';
import Logout from './auth/logout';
import QuestionModal from './questionModal';
import '../styles/styles.css';
import { BiSearchAlt } from 'react-icons/bi';
import Logo from '../images/linkedin_profile_image.png';
import { Typeahead } from 'react-bootstrap-typeahead';


class HeaderTwo extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isAuthenticated, user } = this.props.user;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className='navbar-text mr-3'>
                        <strong>{user ? `Welcome ${user.username}` : ''}</strong>
                    </span>
                </NavItem>
                <Button>
                    <QuestionModal />
                </Button>
                <Button>
                    <Logout />
                </Button>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <Button>
                    <RegisterModal />
                </Button>
                
                <Button>
                    <LoginModal />
                </Button>

            </Fragment>
        )

        return (

            <Jumbotron id="jumbotron">
                <Form>
                    {isAuthenticated ? authLinks : guestLinks}
                </Form>
                <Container>
                    {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={Logo} alt="" />
                </Container>
                <Container>
                    <Form>
                        <BiSearchAlt id="search-icon" />
                        <input type="search" name="topic"
                            placeholder="JavaScript, HTML, CSS, Node, MySQL, Sequelize or Restful Services" />
                        <input type="submit" value="Search" />
                    </Form>
                </Container>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(HeaderTwo);