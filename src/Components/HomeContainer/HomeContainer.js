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
import DateContextProvider from '../useDate/useDate';

const HomeContainer = () => {
    return (
        <div>
            <DateContextProvider>
                <Router>

                    <Switch>
                        <Route exact path='/'>
                            <Navbar />
                            <Home />
                        </Route>
                        <Route exact path='/appointment'>
                            <Navbar />
                            <Appointment />
                        </Route>

                        <Route exact path='/doctor/appointment'>
                            <DoctorAppointments />
                        </Route>
                        {/* <Route exact path='/'>
                            <DoctorAppointments />
                        </Route> */}

                    </Switch>
                </Router>
            </DateContextProvider>
        </div>
    );
};

export default HomeContainer;