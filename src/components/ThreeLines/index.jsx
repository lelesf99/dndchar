import './style.css';
import React from 'react';

export default function ThreeLines(props) {

    return (
        <button onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}
            className={`mobile-nav-toggle ${props.hiddenClass}`}>
            <span className="three-lines"></span>
        </button>
    );
}
