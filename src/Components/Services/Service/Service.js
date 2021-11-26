import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock, faCarSide } from '@fortawesome/free-solid-svg-icons'


const Service = (props) => {
    const history = useHistory();
    const { _id, title, img, cost, date, tourPlace, agency } = props.item;
    // added fontAwesome clock icon
    // const element = <FontAwesomeIcon icon={faClock} />
    // const addedTour = <FontAwesomeIcon icon={faCarSide} />

    const handleDetails = (_id) => {
        const uri = `/details/${_id}`

        history.push(uri);
    }
    return (
        <div className="col-md-3">
            {/* show card value  */}
            <div className="card-group mt-3" style={{ "maxWidth": "500px" }} >
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." style={{ "maxHeight": "150px" }} />
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">{title}</h5>
                            <p>Pakage: {tourPlace}</p>
                            <p>Agency: {agency}</p>
                        </div>

                        <div className="date-cost">
                            <p className="card-text"><span id="bdt"></span>  {date} Days</p>
                            <p className="card-text"><span id="bdt"> @ BDT {cost} </span> </p>
                        </div>
                        {/* add to booking button */}
                        <div className="btn-book text-center">
                            <button
                                onClick={() => handleDetails(_id)}
                                className="btn-regular"> Details</button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;