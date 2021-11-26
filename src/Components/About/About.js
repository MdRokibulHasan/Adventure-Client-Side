import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className="text-center m-3"> About Us</h1>
            <div className="container d-flex align-items-center">
                <div>
                    <img src={`https://i.ibb.co/fxP1wsP/xabout-png-pagespeed-ic-Zsrvw-BYE3-S.webp`} alt="" />
                </div>
                <div className="container ms-5">
                    <div>
                        <h1 id="heading-text">Get ready for real time adventure</h1>
                        <p>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                    </div>
                    <button className="book-now">Book Your Destination</button>
                </div>
            </div>
        </div>
    );
};

export default About;