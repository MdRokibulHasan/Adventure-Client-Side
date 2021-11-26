import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    // console.log(id);
    const [details, setDetails] = useState([])
    const [specificDetail, setSpecificDetail] = useState({})
    // console.log(specificDetail);
    useEffect(() =>
        fetch("https://frozen-fjord-73803.herokuapp.com/events")
            .then(res => res.json())
            .then(data => setDetails(data))

        , []);

    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details?.find(detail => detail._id == id)
            setSpecificDetail(matchedData);
        }

    }

        , [details]);
    // console.log(specificDetail);

    const { title, name, cost, date } = specificDetail;

    // add order to database

    const onSubmit = data => {
        // console.log('paice');
        axios.post('https://frozen-fjord-73803.herokuapp.com/order', { ...{ title, name, cost, date }, ...data, 'status': 1 })

            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    };

    return (
        <div>
            <div className="text-center m-5">


                <div className="d-flex">
                    <div className="">
                        <div className="card-group" style={{ "maxWidth": "500px" }} >
                            <div className="card ">
                                <img src={specificDetail?.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">{specificDetail?.title}</h5>
                                        <p>Pakage: {specificDetail?.tourPlace}</p>
                                        <p>Agency: {specificDetail?.agency}</p>
                                        <p> {specificDetail?.description}</p>
                                    </div>

                                    <div className="date-cost">
                                        <p className="card-text"><span id="bdt"></span>  {specificDetail?.date} Days</p>
                                        <p className="card-text"><span id="bdt"> @ BDT {specificDetail?.cost} </span> </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <input type="email" {...register("email")} placeholder="Email" />
                            <input type="text" {...register("address")} placeholder="Address" />
                            <input type="number" {...register("phone")} placeholder="Phone" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Details;