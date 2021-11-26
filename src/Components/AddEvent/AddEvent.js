import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddEvent.css';

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-fjord-73803.herokuapp.com/events', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    };
    return (
        <div className="add-service m-5">
            <h2 className="text-center m-5">Please Add a new Events</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("tourPlace")} placeholder="tourPlace" />
                <input {...register("agency")} placeholder="Agency" />
                <input type="number" {...register("date")} placeholder="Date" />
                <input type="number" {...register("cost")} placeholder="cost" />
                <input {...register("img")} placeholder="image url" />
                <textarea {...register("description")} placeholder="Description" />

                <input type="submit" value="Add Event" />
            </form>
        </div>
    );
};

export default AddEvent;