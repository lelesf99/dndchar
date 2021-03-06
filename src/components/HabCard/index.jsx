import './style.css';
import Button from '../Button';
import { useState, useEffect, useRef } from 'react';

export default function HabCard(props) {

    const cardRef = useRef();

    const [isHovering, setIsHovering] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [habVal, setHabVal] = useState(0);

    useEffect(() => {
        if (props.currTarget) {
            if (cardRef.current.contains(props.currTarget)) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        }

    }, [props.currTarget])

    useEffect(() => {
        if (isHovering && props.isDragging && !isLocked && !isNaN(parseInt(props.dragData.innerText))) {
            setHabVal(parseInt(props.dragData.innerText));
            setIsLocked(false);
        } else if (!isHovering && props.isDragging && !isLocked) {
            setHabVal(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHovering, habVal]);

    useEffect(() => {
        if (habVal !== 0) {
            props.confirmFn(props.hab, habVal, props.dragData);
            setIsLocked(true);
        } else {
            setIsLocked(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isDragging]);

    useEffect(() => {
        setHabVal(props.value);
        if (props.value === 0) setIsLocked(false);
    }, [props.value])

    return (
        <div className={`char-hab-card ${props.className !== undefined ? props.className : ""} ${habVal !== 0 ? 'active' : ''} ${isLocked ? 'lock' : ''}`}
            ref={cardRef}>
            {props.hab && <div className="card-header dropzone">
                {props.hab}
            </div>}
            <div className={`card-body dropzone ${habVal !== 0 ? 'show' : ''}`}>
                <div className='hab-val dropzone'>{habVal}</div>
                <div className='hab-mod dropzone'><span>{`${Math.floor((habVal - 10) / 2) >= 0 ? `+${Math.floor((habVal - 10) / 2)}` : Math.floor((habVal - 10) / 2)}`}</span></div>
            </div>
            <div className={`card-footer ${isLocked ? 'show' : ''}`}>
                <Button className="cancel hab-value-cancel" onClick={(e) => { setHabVal(0); setIsLocked(false); props.cancelFn(props.hab, habVal) }}>Cancelar</Button>
            </div>
        </div>
    );
}