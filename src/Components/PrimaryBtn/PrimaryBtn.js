import React from 'react';
import './PrimaryBtn.css'
import { Link } from 'react-router-dom';

const PrimaryBtn = (props) => {

    return (
        <div>
            <Link to="{props.appointment}">
                <button
                    className="primaryBtn"
                >{props.children}
                </button>
            </Link>
        </div>
    );
};

export default PrimaryBtn;