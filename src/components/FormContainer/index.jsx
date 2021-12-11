import './style.css';
import logo from '../../img/Logo.png';
import React from 'react';

export default function FormContainer(props) {
    return (
        <div className={`form-container ${props.className !== undefined ? props.className : ""}`}>
            {props.logo
                ? <div className="logo"><img src={logo} alt="" /></div>
                : null}
            {props.children}
        </div>
    );
}