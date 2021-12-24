import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from "react-spring"
import { useGesture } from "@use-gesture/react";

export default function DragCard(props) {

    const [drag, setDrag] = useState(false);
    const [droppable, setDroppable] = useState(false);

    const cardRef = useRef();


    useEffect(() => {
        if (props.dragData === cardRef.current.childNodes[0] && props.isDragging) {
            setDrag(true);
        } else {
            setDrag(false);
        }
    }, [props.dragData, props.isDragging]);

    useEffect(() => {
        if (props.currTarget) {
            if (props.currTarget.classList.contains("dropzone")) {
                setDroppable(true);
            } else {
                setDroppable(false);
            }
        }

    }, [props.currTarget]);
    const [{ x, y, scale, background, boxShadow }, api] = useSpring(
        () => ({
            scale: 1,
            x: 0,
            y: 0,
            config: { mass: 5, tension: 500, friction: 50 },
        })
    )
    const bind = useGesture(
        {
            onDrag: ({ active, movement: [x, y] }) =>
                api({ x: active ? x : 0, y: active ? y : 0, scale: active ? 1 : 1.1 }),
            onDragEnd: (active) => api({ scale: active ? 1 : 1.1 }),
            onMove: ({ dragging }) =>
                !dragging &&
                api({
                    scale: 1.1,
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ scale: 1 }),
        }, {
        drag: {

            pointer: {
                capture: false,
                touch: false
            }

        }
    }
    )

    return (
        <animated.div ref={cardRef} {...bind()} style={{
            x, y, scale: scale, background: background, boxShadow: boxShadow
        }}
            id={props.id}
            className={`card drag-card ${props.className !== undefined ? props.className : ""} ${drag ? "dragging" : ""} ${droppable ? "droppable" : ""} ${props.body !== 0 ? "show" : ""} `}>
            {props.header && <div className="card-header">
                {props.header}
            </div>}
            {props.body && <div className="card-body">
                {props.body}
            </div>}
            {props.footer && <div className="card-footer">
                {props.footer}
            </div>}
        </animated.div>
    );
}