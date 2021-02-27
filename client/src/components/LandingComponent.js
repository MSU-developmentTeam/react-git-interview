import React from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from "react-bootstrap";
import { CardHeader } from 'reactstrap';
import { HomePage } from "../pages/HomePage";
import '../styles/styles.css';
import FirstImage from "../images/StoryPicture.png"

export const LandingPage = (props) => {
    return (
        <div>
            <Jumbotron id="Hero">
                <img src={FirstImage} alt="FirstImage" id="heroImage" />
                <h3><span>To many resources can be...</span></h3>
                <h3><span>OVERWHELMING!</span></h3>
                <h3><span>Let us help ease your interview process!</span></h3>
            </Jumbotron>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(LandingPage)
