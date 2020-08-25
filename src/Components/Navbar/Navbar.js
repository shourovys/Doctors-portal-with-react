import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <ul className='navItemContainer'>
                <li className='black'>Home</li>
                <li className='black'>About</li>
                <li className='black'>Dental Services</li>
                <li className='white'>Reviews</li>
                <li className='white'>Blog</li>
                <li className='white'>Contact Us</li>
            </ul>
        </div>
    );
};

export default Navbar;