import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { useParams } from 'react-router-dom';
const Navbar = () => {
    const [currentURL, setCurrentURL] = useState('')
    useEffect(() => {
        setCurrentURL(window.location.href)
    }, [useParams()])
    let classNm = 'black'
    if (currentURL === 'http://localhost:3000/') {
        classNm = 'white'
    }



    return (
        <div>
            <ul className='navItemContainer'>
                <li className='black'>Home</li>
                <li className='black'>About</li>
                <li className='black'>Dental Services</li>
                <li className={classNm}>Reviews</li>
                <li className={classNm}>Blog</li>
                <li className={classNm}>Contact Us</li>
            </ul>
        </div>
    );
};

export default Navbar;