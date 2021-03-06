import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './BookAppointForm.css'
import { useDate } from "../useDate/useDate";

export default function BookAppointForm(props) {
    const [isLoading, setIsLoading] = useState(null)
    const [bookId, setBookId] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => appointmentAdd(data)

    const [date, setDate] = useDate()



    const appointmentAdd = (info) => {
        setIsLoading(true)
        const Data = {
            appointmentInfo: props.appointment,
            appointmentBookingData: date,
            peasantInfo: info,
            action: 'Not visited'

        }

        fetch('https://shielded-falls-27055.herokuapp.com/bookAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Data),
        })
            .then(response => response.json())
            .then(data => bookingSuccessful(data))

    }

    // const alert = window.alert(
    //     <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" /> }}>
    //         Your Appointment Successfully added and Appointment ID:
    // </Alert>)

    const bookingSuccessful = (data) => {

        setIsLoading(false)
        setBookId(data._id)
    }

    return (
        <div className="">

            {
                !bookId &&
                <div className="">
                    {
                        isLoading ?
                            <div className='loading'>"Loading..."</div>
                            :
                            <div className="">
                                <form className='BookAppointForm' onSubmit={handleSubmit(onSubmit)}>


                                    <input name="peasantName" placeholder="Enter Your Name" ref={register({ required: true })} />
                                    {errors.peasantName && <span>This field is required</span>}


                                    <input name="peasantPhone" placeholder="Enter Your Phone Number" ref={register({ required: true })} />


                                    <input name="peasantEmail" placeholder="Enter Your Email Address" ref={register({ required: true })} />


                                    <input name="bookingDate" placeholder="DD/MM/YY" ref={register({ required: true })} defaultValue={date} />
                                    <button
                                        className='primaryBtn'
                                        id='cardBtn'
                                    >
                                        Submit
                        </button>
                                </form>
                            </div>
                    }
                </div>
            }
            {
                bookId &&
                <div className="bookSuccessfulAlert">
                    <h3> Your Appointment Successfully added</h3>
                    <h3>Appointment ID: {bookId}</h3>
                    <br />
                    <button onClick={props.handleClose} className='primaryBtn'>OK</button>
                </div>
            }
        </div>
    );
}
