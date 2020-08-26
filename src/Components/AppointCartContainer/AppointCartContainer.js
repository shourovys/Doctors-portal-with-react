import React, { useState } from 'react';
import './AppointCartContainer.css'
import AppointmentsCart from '../AppointmentsCart/AppointmentsCart';
import AppointmentsData from '../../FakeData/FakeData';

const AppointCartContainer = () => {
    const appointmentData = AppointmentsData
    console.log(appointmentData);

    return (
        <div className='AppointCartContainer'>
            <h1 className='primary-color text-center h-seconder'>Available Appointment on Friday </h1>
            <div className="carts">
                {
                    appointmentData.map(appointment =>
                        <AppointmentsCart
                            appointment={appointment}
                            key={appointment.id}
                        >
                        </AppointmentsCart>)
                }
            </div>

        </div>
    );
};

export default AppointCartContainer;