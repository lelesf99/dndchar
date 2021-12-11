import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import { mousePos } from '../../Utils';

export default function DragCard(props) {

    const [drag, setDrag] = useState(false);

    const cardRef = useRef();

    useEffect(() => {
        if (props.dragData === cardRef.current.childNodes[0] && props.isDragging) {
            setDrag(true);
        } else {
            setDrag(false);
        }
    }, [props.dragData, props.isDragging]);

    useEffect(() => {
        let pos = [0, 0];
        let animReq;
        let card = cardRef.current;

        let cardOrigin = [
            card.getBoundingClientRect().x + card.getBoundingClientRect().width / 2,
            card.getBoundingClientRect().y + card.getBoundingClientRect().height / 2
        ];
        let relMousePos = [0, 0];
        if (drag) {

            function animate() {
                relMousePos = sub(mousePos, cardOrigin);
                pos = relMousePos;
                cardRef.current.style.setProperty("transform", `translate(${pos[0]}px,  ${pos[1]}px)`)
                animReq = requestAnimationFrame(animate);
            }
            animate();
        }
        return () => {
            cancelAnimationFrame(animReq);
            pos = [0, 0];
            if (card)
                card.style.setProperty("transform", `translate(${pos[0]}px,  ${pos[1]}px)`)
        };
    }, [drag]);

    return (
        <div ref={cardRef} className={`card drag-card ${props.className !== undefined ? props.className : ""} ${props.body !== 0 ? "show" : ""}`}>
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

// function add(v, u) {
//     return [v[0] + u[0], v[1] + u[1]];
// }

function sub(v, u) {
    return [v[0] - u[0], v[1] - u[1]];
}

// function mult(v, k) {
//     return [v[0] * k, v[1] * k];
// }
// function magSq(v) {
//     return v[0] * v[0] + v[1] * v[1];
// };
// function mag(v) {
//     return Math.sqrt(magSq(v));
// }
// function normalize(v) {
//     const len = mag(v);
//     if (len !== 0)
//         return mult(v, 1 / len);
// }

// function dist(v, u) {
//     return Math.sqrt((v[0] - u[0]) * (v[0] - u[0]) + (v[1] - u[1]) * (v[1] - u[1]));
// }
