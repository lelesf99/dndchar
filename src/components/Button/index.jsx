import './style.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
    if (props.href === undefined) {
        if (props.submit) {
            return (
                <button
                    id={props.id}
                    className={`btn ${props.className !== undefined ? props.className : ""}`}
                    type="submit"
                    disabled={props.disabled ? "disabled" : ""}
                    onClick={props.submit !== undefined ? (e) => { e.preventDefault(); props.submit(); } : () => { return null }}>
                    {props.children}
                </button >
            );
        } else {
            return (
                <button
                    id={props.id}
                    className={`btn ${props.className !== undefined ? props.className : ""}`}
                    type="button"
                    disabled={props.disabled ? "disabled" : ""}
                    onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}>
                    {props.children}
                </button >
            );
        }
    }
    else if (props.pageLink) {
        return (
            <Link
                to={props.href}
                id={props.id}
                className={`btn ${props.className !== undefined ? props.className : ""}`}
            >
                {props.children}
            </Link>
        );
    } else {
        return (
            <a
                id={props.id}
                className={`btn ${props.className !== undefined ? props.className : ""}`}
                href={props.href}
                onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}>
                {props.children}
            </a >
        );
    }
}