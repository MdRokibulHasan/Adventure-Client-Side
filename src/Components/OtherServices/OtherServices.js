import React from 'react';
import './OtherServices.css';

const OtherServices = () => {
    return (
        <div>
            <div>
                <h1 className="services-text">Services</h1>
            </div>
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-hotel"></i>
                    <h3>Affordable hotels</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nostrum architecto fugit, quo quae veritatis ex totam voluptatem sapiente?</p>
                </div>
                <div className="box">
                    <i className="fas fa-utensils"></i>
                    <h3>Food and Drinks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nostrum architecto fugit, quo quae veritatis ex totam voluptatem sapiente?</p>
                </div>
                <div className="box">
                    <i className="fas fa-bullhorn"></i>
                    <h3>Safty Guide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nostrum architecto fugit, quo quae veritatis ex totam voluptatem sapiente?</p>
                </div>
                <div className="box">
                    <i className="fas fa-globe-asia"></i>
                    <h3>Around the world</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nostrum architecto fugit, quo quae veritatis ex totam voluptatem sapiente?</p>
                </div>
                <div className="box">
                    <i className="fas fa-plane"></i>
                    <h3>Fastest Travel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nostrum architecto fugit, quo quae veritatis ex totam voluptatem sapiente?</p>
                </div>
                <div className="box">
                    <i className="fas fa-hiking"></i>
                    <h3>Adventures</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nostrum architecto fugit, quo quae veritatis ex totam voluptatem sapiente?</p>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;