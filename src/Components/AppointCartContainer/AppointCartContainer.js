import React from 'react';
import './AppointCartContainer.css'
import AppointmentsCart from '../AppointmentsCart/AppointmentsCart';

const AppointCartContainer = () => {
    const cartData = [1, 2, 3, 4, 5, 6]
    return (
        <div className='AppointCartContainer'>
            <h1 className='primary-color text-center h-seconder'>Available Appointment on Friday </h1>
            <div className="carts">
                {
                    cartData.map(data => <AppointmentsCart data={data}></AppointmentsCart>)
                }
            </div>
        </div>
    );
};

export default AppointCartContainer;