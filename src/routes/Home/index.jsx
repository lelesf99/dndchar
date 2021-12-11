import React from 'react';

export default function Home(props) {
    return (
        <div>
            <h1> Bem vindo {props.user.uid}</h1>
        </div>
    );
}