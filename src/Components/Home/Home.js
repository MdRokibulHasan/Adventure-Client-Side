import React from 'react';
import useData from '../../Hooks/useData';
import About from '../About/About';
import Contact from '../Contact/Contact';
import OtherServices from '../OtherServices/OtherServices';
import Service from '../Services/Service/Service';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    const { values } = useData();
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="text-center m-3">
                    <p>Check Our Best Promotional Tour</p>
                    <h1>Upcoming Events</h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {/* show card value  */}
                        <div className="row g-4 ms-5">
                            {
                                values?.map(value => <Service
                                    key={value._id}
                                    item={value}

                                ></Service>)
                            }


                        </div>
                    </div>
                </div>
            </div>
            <div>
                <OtherServices></OtherServices>
            </div>
            <div className="m-5">
                <About></About>
            </div>
            <div className="m-5">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;