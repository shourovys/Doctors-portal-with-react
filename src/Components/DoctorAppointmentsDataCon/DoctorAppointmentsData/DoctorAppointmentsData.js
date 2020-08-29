import React from 'react';
import Selector from '../Selector/Selector';

const DoctorAppointmentsData = (props) => {
    const peasantName = props.data.peasantInfo.peasantName
    const id = props.data._id
    const preAction = props.data.action

    console.log('preAction', preAction);

    //todo gate appointment time form database by api
    // useEffect(() => {
    //     fetch('')
    // }, [])

    return (
        <div>
            <ul className="appointmentData">
                <li>{peasantName}</li>
                <li>7.00 AM</li>
                <li><Selector id={id} preAction={preAction} /></li>
            </ul>

        </div>
    );
};

export default DoctorAppointmentsData;