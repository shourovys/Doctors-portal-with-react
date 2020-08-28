import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Appointment from '../Appointment/Appointment';
import DoctorAppointments from '../DoctorAppointments/DoctorAppointments';

const HomeContainer = () => {
    return (
        <div>
            <Router>

                <Switch>
                    {/* <Route exact path='/'>
                        <Home />
                         <Navbar />
                    </Route> */}
                    {/* <Route exact path='/appointment'>
                        <Appointment />
                         <Navbar />
                    </Route> */}
                    {/* <Route exact path='/doctor/appointment'>
                        <DoctorAppointments/>
                    </Route> */}
                    <Route exact path='/'>
                        <DoctorAppointments />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default HomeContainer;