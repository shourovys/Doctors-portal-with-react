import React from 'react';
import './DoctorAppointments.css'
import Drawer from '../Drawer/Drawer'
import CalendarCS from '../CalendarCS/CalendarCS'
import DoctorAppointmentsDataCon from '../DoctorAppointmentsDataCon/DoctorAppointmentsDataCon';

const DoctorAppointments = () => {
    return (
        <div class='DoctorAppointments'>
            <Drawer />
            <div className="DoctorAppointments-data">
                <h2 class='h-seconder'>Appointments</h2>
                <div className="tow-part-container">
                    <div className="left-side">
                        <CalendarCS />
                    </div>
                    <div className="right-side">
                        <DoctorAppointmentsDataCon />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoctorAppointments;