import "./style.css"
import { useState, useEffect, useRef } from "react";

export default function RaceCard(props) {
    const collapsePadRef = useRef();

    const [active, setActive] = useState(false);
    const [height, setHeight] = useState(0);


    useEffect(() => {
        if (collapsePadRef.current) {
            setHeight(collapsePadRef.current.offsetHeight);
        }

    }, [active]);
    return (
        <div tabIndex="0"
            className={`race-card ${props.className !== undefined ? props.className : ""} ${active ? 'active' : ''}`}
            onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}>
            {props.header && <div className="card-header">
                {props.header}
            </div>}
            {(props.body || props.children) && <div className="card-body collapse" style={active ? { height: height, opacity: 1 } : { height: 0, opacity: 0 }}>
                <div className='collapse-padding' ref={collapsePadRef}>
                    {props.body}
                    {props.children}
                </div>
            </div>}
            {props.footer && <div className="card-footer">
                {props.footer}
            </div>}
        </div>
    );
}