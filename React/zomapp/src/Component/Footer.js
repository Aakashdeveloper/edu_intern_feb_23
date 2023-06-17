import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer>
            <hr/>
            <p className="footText">&copy; Developer Funnel 2023</p>
            <hr/>
            <div className="footDiv">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footDiv">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footDiv noBorder">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <a href="">
                <img src="https://i.ibb.co/bsXv4bf/facebook.png" alt="fblogo" className="socialLogo"/>
            </a>
            <a href="">
                <img src="https://i.ibb.co/8c9LJP1/insta.png" alt="fblogo" className="socialLogo"/>
            </a>
            <a href="">
                <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fblogo" className="socialLogo"/>
            </a>
        </footer>
        </>
    )
}

export default Footer;