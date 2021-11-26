import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="text-center mb-3">Contact Us</h1>
            <div className="row-section">
                <div className="image">
                    <img src={`https://i.ibb.co/GtWb4Dn/undraw-Popular-re-mlfe.png`} alt="" />
                </div>
                <div className="form">
                    <div className="inputBox">
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                    </div>
                    <div className="inputBox">
                        <input type="number" placeholder="number" />
                        <input type="text" placeholder="subject" />
                    </div>
                    <textarea placeholder="message" name="" cols="30" rows="10"></textarea>
                    <input type="submit" className="btn-message" value="send message" />
                </div>

            </div>
        </div>
    );
};

export default Contact;