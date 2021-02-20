import React, { Component, Fragment } from 'react';
import { logout } from '../../actions/userActions';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import "../../styles/styles.css";

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <Fragment>
                <Button onClick={this.props.logout} href='#'>Logout</Button>
            </Fragment>
        )
    }
}

export default connect(null, { logout }(Logout))