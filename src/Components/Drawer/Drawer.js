import React from 'react';
import './Drawer.css'
import { Link } from 'react-router-dom';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import EventIcon from '@material-ui/icons/Event';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

const Drawer = () => {
    return (
        <div className='drawer'>
            <ul>
                <Link to='/dashboard'> <li>
                    <DashboardTwoToneIcon className='icon' />
                    Dashboard
                </li>
                </Link>
                <Link to='/appointment'> <li>
                    <EventIcon className='icon' />
                    Appointment
                </li>
                </Link>
                <Link to='/patients'> <li>
                    <SupervisorAccountTwoToneIcon className='icon' />
                    Patients
                </li>
                </Link>
                <Link to='/prescriptions'> <li>
                    <DescriptionTwoToneIcon className='icon' />
                    Prescriptions
                </li>
                </Link>
                <Link to='/setting'> <li>
                    <SettingsTwoToneIcon className='icon' />
                    Setting
                </li>
                </Link>
            </ul>
        </div>
    );
};

export default Drawer;