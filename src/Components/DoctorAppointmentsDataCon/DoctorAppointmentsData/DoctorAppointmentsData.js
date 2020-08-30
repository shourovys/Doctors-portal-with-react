import React from 'react';
import Selector from '../Selector/Selector';

const DoctorAppointmentsData = (props) => {
    const peasantName = props.data.peasantInfo.peasantName
    const id = props.data._id
    const time = props.data.appointmentInfo.time
    const preAction = props.data.action

    console.log('preAction', preAction);


    return (
        <div>
            <ul className="appointmentData">
                <li>{peasantName}</li>
                <li>{time}</li>
                <li><Selector id={id} preAction={preAction} /></li>
            </ul>

        </div>
    );
};

export default DoctorAppointmentsData;