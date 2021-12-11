import './style.css';
import React, { useState } from 'react';
import ThreeLines from '../ThreeLines';

export default function Sidebar(props) {

    const [isHidden, setIsHidden] = useState(false);
    const [hiddenClass, setHiddenClass] = useState("hidden");

    function toggleHidden() {
        setHiddenClass(isHidden ? "hidden" : "shown");
        setIsHidden(!isHidden);
    }

    return (
        <div className={`sidebar ${props.className !== undefined ? props.className : ""}` + hiddenClass}>

            <ThreeLines onClick={toggleHidden} hiddenClass={hiddenClass} />
            {props.title && <h2 className="sidebar-title">{props.title}</h2>}
            {props.children}
        </div>
    );
} 