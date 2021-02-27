import React from 'react';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import Footer from "../components/Footer";
import { connect } from 'react-redux'
import LandingPage from "../components/LandingComponent";

export const HomePage = (props) => {
    return (
        <div>
            <Header />
            <LandingPage />
            <QuestionCard />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(HomePage)
