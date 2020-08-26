import React from "react";
import { useForm } from "react-hook-form";
import './BookAppointForm.css'

export default function BookAppointForm(props) {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => appointmentAdd(data)

    const appointmentAdd = (info) => {
        const Data = {
            appointId: props.appointId,
            peasantInfo: info
        }
        console.log(Data);
        localStorage.setItem(Data)
    }

    return (
        <form className='BookAppointForm' onSubmit={handleSubmit(onSubmit)}>


            <input name="peasantName" placeholder="Enter Your Name" ref={register({ required: true })} />
            {errors.peasantName && <span>This field is required</span>}


            <input name="peasantPhone" placeholder="Enter Your Phone Number" ref={register({ required: true })} />


            <input name="peasantEmail" placeholder="Enter Your Email Address" ref={register({ required: true })} />


            <input name="bookingDate" placeholder="DD/MM/YY" ref={register({ required: true })} />
            <button
                className='primaryBtn'
                id='cardBtn'
                onClick={props.handleClose}
            >
                Submit
             </button>
        </form>
    );
}
