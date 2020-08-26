import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Appointment from '../Appointment/Appointment';

const HomeContainer = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/appointment'>
                        <Appointment />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default HomeContainer;