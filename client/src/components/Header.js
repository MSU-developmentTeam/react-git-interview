import React from "react";
import { connect } from 'react-redux';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../images/linkedin_profile_image.png";
import "../styles/styles.css";
// import { BiSearchAlt } from 'react-icons/fa/BiSearchAlt';

export const Header = (props) => {
    return (
        <Jumbotron className="jumbotron">
               <Form>
                   <Button type="submit" onClick={() =>
                       dispatch("signup" )
                   } >Signup</Button>
                   <Button>Login</Button>
               </Form>
            <Container>
                <img src={Logo} alt="Header Image" />
             </Container>
            <Container>
               <Form>
               {/* <BiSearchAlt /> */}
                <input type="search" name="topic"
                    placeholder="JavaScript, HTML, CSS, Node, MySQL, Sequelize or Restful Services" />
                <input type="submit" value="Search" />
               </Form>
           </Container>
        </Jumbotron>
    )
}   

const mapStateToProps = (state) => ({
    
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps /*mapDispatchToProps*/)(Header)
