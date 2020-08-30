import React, { useEffect } from 'react';
import './DoctorAppointmentsDataCon.css'
import DoctorAppointmentsDataHeader from './DoctorAppointmentsDataHeader/DoctorAppointmentsDataHeader';
import DoctorAppointmentsData from './DoctorAppointmentsData/DoctorAppointmentsData';
import { useState } from 'react';
import { useDate } from '../useDate/useDate';

const DoctorAppointmentsDataCon = () => {
    const [bookingData, setBookingData] = useState([])

    console.log(bookingData)

    const [date, setDate] = useDate()

    useEffect(() => {
        if (date) {
            fetch(`https://shielded-falls-27055.herokuapp.com/getAppointments/${date}`)
                .then(res => res.json())
                .then(data => setBookingData(data))
        }
    }, [date])


    return (
        <div className='DoctorAppointmentsDataCon'>
            <header>
                <h3 className='.h-third primary-color'>Appointments</h3>
                <h4 className='date gray'>{date}</h4>
            </header>
            <DoctorAppointmentsDataHeader />
            {
                bookingData &&
                bookingData.map(data =>
                    <DoctorAppointmentsData
                        data={data}
                        key={data._id}
                    >

                    </DoctorAppointmentsData>)
            }
        </div>
    );
};

export default DoctorAppointmentsDataCon;