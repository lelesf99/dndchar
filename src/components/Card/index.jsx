import './style.css';
import React from 'react';


export default function Card(props) {
    return (
        <div className={`card ${props.className !== undefined ? props.className : ""}`}>
            {props.header && <div className="card-header">
                {props.header}
            </div>}
            {(props.body || props.children) && <div className="card-body">
                {props.body}
                {props.children}
            </div>}
            {props.footer && <div className="card-footer">
                {props.footer}
            </div>}
        </div>
    );
}