import React from 'react';
import './BgImg.css'
import homeImg from '../../Image/images/Home.png'
const BgImg = () => {
    return (
        <div className="bgImg">
            <img src={homeImg} />
        </div>
    );
};

export default BgImg;