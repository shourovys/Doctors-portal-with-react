import React from 'react';
import './PrimaryBtn.css'
import { Link } from 'react-router-dom';

const PrimaryBtn = (props) => {
    // console.log(props.goTo)
    return (
        <div>
            <Link to={props.goTo}>
                <button
                    className="primaryBtn"
                >{props.children}
                </button>
            </Link>
        </div>
    );
};

export default PrimaryBtn;