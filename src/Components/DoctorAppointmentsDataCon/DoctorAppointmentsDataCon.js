import React from 'react';
import './DoctorAppointmentsDataCon.css'
import DoctorAppointmentsDataHeader from './DoctorAppointmentsDataHeader/DoctorAppointmentsDataHeader';
import DoctorAppointmentsData from './DoctorAppointmentsData/DoctorAppointmentsData';

const DoctorAppointmentsDataCon = () => {
    return (
        <div className='DoctorAppointmentsDataCon'>
            <header>
                <h3 className='.h-third primary-color'>Appointments</h3>
                <h4 className='date gray'>07 Feb,2020</h4>
            </header>
            <DoctorAppointmentsDataHeader />
            <DoctorAppointmentsData />
        </div>
    );
};

export default DoctorAppointmentsDataCon;