import React from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from "react-bootstrap";
//import { HomePage } from "../pages/HomePage";
import '../styles/styles.css';
import FirstImage from "../images/StoryPicture.png"

export const LandingPage = (props) => {
    return (
        <div>
            <Jumbotron id="Hero">
                <img src={FirstImage} alt="FirstImage" id="hero-image" />
                <h3 id="hero-text"><span>To many resources can be...</span></h3>
                <h3 id="main-word"><span>OVERWHELMING!</span></h3>
                <h3><span>Let us help ease your interview process!</span></h3>
                <h3>Get started by searching which topic you’d like to learn more about.</h3> 
                    <h3>Create an account to post interview questions of your own!</h3>
            </Jumbotron>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(LandingPage)
