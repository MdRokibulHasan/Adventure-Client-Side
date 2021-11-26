import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="mt-3">
            <Carousel>
                <Carousel.Item className="h-25">
                    <img
                        className="d-block w-100 h-25"
                        src="https://i.ibb.co/wrD7SJ2/sundorbon.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sundarbans</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="h-25">
                    <img
                        className="d-block w-100 h-25"
                        src="https://i.ibb.co/WK91YZR/Saint-Martin.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Saint Martin</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="h-25">
                    <img
                        className="d-block w-100 h-25"
                        src="https://i.ibb.co/rwXZ270/bandarban.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Bandarban</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;