import React from 'react';
import useData from '../../Hooks/useData';
import Service from './Service/Service';

const Services = () => {
    const { values } = useData();
    return (
        <div>
            <div className="text-center m-3">
                {/* <p>Check Our Best Promotional Tour</p> */}
                <h1>Upcoming Events</h1>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {/* show card value  */}
                    <div className="row g-4 ms-5">
                        {
                            values.map(item => <Service
                                key={item.id}
                                item={item}

                            ></Service>)
                        }


                    </div>
                </div>
            </div>

        </div >
    );
};

export default Services;