import React from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
 import Footer from "../components/Footer";
import { connect } from 'react-redux'

export const HomePage = (props) => {
    return (
        <div>
            <Header />
            <QuestionCard />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps /*mapDispatchToProps*/)(HomePage)
