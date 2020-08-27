import React, { useState, useEffect } from 'react';
import './AppointCartContainer.css'
import AppointmentsCart from '../AppointmentsCart/AppointmentsCart';
import AppointmentsData from '../../FakeData/FakeData';

const AppointCartContainer = () => {
    const [appointmentData, setAppointmentData] = useState([])
    // const appointmentData = AppointmentsData

    useEffect(() => {
        fetch('http://localhost:4200/appointment')
            .then(res => res.json())
            .then(data => setAppointmentData(data))
    }, [])

    return (
        <div className='AppointCartContainer'>
            <h1 className='primary-color text-center h-seconder'>Available Appointment on Friday </h1>
            <div className="carts">
                {
                    appointmentData &&
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