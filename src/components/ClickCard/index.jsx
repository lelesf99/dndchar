import './style.css';
import React, { useState } from 'react';
export default function ClickCard(props) {

    const [active, setActive] = useState(false);

    return (
        <div tabIndex="0"
            className={`click-card ${props.className !== undefined ? props.className : ""} ${active ? 'active' : ''}`}
            onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}>
            {props.header && <div className="card-header">
                {props.header}
            </div>}
            {props.body && <div className="card-body">
                {props.body}
            </div>}
            {props.footer && <div className="card-footer">
                {props.footer}
            </div>}
        </div>
    );
}