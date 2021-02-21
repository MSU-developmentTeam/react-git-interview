import React from 'react';
//import Header from '../components/Header';
import HeaderTwo from '../components/Header2';
//import QuestionCard from '../components/QuestionCard';
import QuestionCardTwo from '../components/QuestionCard2';
import Footer from "../components/Footer";
import { connect } from 'react-redux'

export const HomePage = (props) => {
    return (
        <div>
            {/* <Header /> */}
            <HeaderTwo />
            {/* <QuestionCard /> */}
            <QuestionCardTwo />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps /*mapDispatchToProps*/)(HomePage)
