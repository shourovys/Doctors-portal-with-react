import React from 'react';
import './Appointment.css'
import CalendarCS from '../CalendarCS/CalendarCS'
import BgImg from '../BgImg/BgImg';


const Appointment = () => {
    return (
        <div>
            <div className="">
                <h1>Appointment</h1>
                <CalendarCS />
                <BgImg />
            </div>
        </div>
    );
};

export default Appointment;