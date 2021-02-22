import React from 'react';
import { connect } from 'react-redux';
import { TiSocialLinkedin } from 'react-icons/ti';
import "../styles/styles.css";

export const Footer = (props) => {
    return (
        <footer id="sticky-footer">
    <div class="container bottom_border">
        <div class="row">
            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Contact us</h5>
                <p class="mb10">enxhi_salaj@yahoo.com</p>
                <p class="mb10">ptrogg1992@gmail.com</p>
                <p class="mb10">sambishop3015@hotmail.com</p>
                <p class="mb10">tatum_alex@gmail.com</p>
                <p class="mb10">marlee.eyre@gmail.com</p>
                <p class="mb10">muneebbwp@gmail.com</p>
            </div>
            {/*  Linkedin links of the development team */}
            <div class=" col-sm-4 col-md  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
                <p><a href="https://www.linkedin.com/in/enxhi-salaj-09a859173/"><TiSocialLinkedin id='linkedIn' /> Enxhi Salaj</a></p>
                <p><a href="https://www.linkedin.com/in/pierce-rogg"><TiSocialLinkedin id='linkedIn' /> Pierce Rogg</a></p>
                <p><a href="https://www.linkedin.com/in/sambishop3015/"><TiSocialLinkedin id='linkedIn' /> Sam Bishop</a></p>
                <p><a href="https://www.linkedin.com/in/alex-tatum-84330a1b3"><TiSocialLinkedin id='linkedIn' /> Alex Tatum </a></p>
                <p><a href="https://www.linkedin.com/in/marlee-eyre-cnmt-b4919686/"><TiSocialLinkedin id='linkedIn' /> Marlee Eyre</a></p>
                <p><a href="https://www.linkedin.com/in/muneebbwp"><TiSocialLinkedin id='linkedIn' /> Muneeb Ali</a></p>
            </div>
        </div>
    </div>
    <div class="container text-center">
        <small>Copyright 2021 &copy; Git.Interview</small>
    </div>
</footer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
