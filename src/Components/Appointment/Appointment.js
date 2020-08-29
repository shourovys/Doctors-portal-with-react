import React from 'react';
import './Appointment.css'
import CalendarCS from '../CalendarCS/CalendarCS'
import BgImg from '../BgImg/BgImg';
import AppointCartContainer from '../AppointCartContainer/AppointCartContainer';


const Appointment = () => {

    return (
        <div>

            <div className="vewHeight bg">
                <div className="appointment-calender">
                    <h1 className='h-primary'>Appointment</h1>
                    <CalendarCS />
                </div>
                <BgImg />
            </div>
            <AppointCartContainer />
        </div>
    );
};

export default Appointment;