import React from 'react';
import './Home.css'

import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import BgImg from '../BgImg/BgImg';

const Home = () => {
    return (
        <div className='home'>
            <div className="homeText bg">
                <h1>Your New Smile Starts Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore molestias quis inventore tempora quasi a, optio provident debitis ex error quos illo culpa laborum incidunt laudantium</p>
                <PrimaryBtn goTo='/appointment'>GET APPOINTMENT</PrimaryBtn>
            </div>
            <div className='deepBlue homeSide'>
                <BgImg ></BgImg>
            </div>

        </div>
    );
};

export default Home;