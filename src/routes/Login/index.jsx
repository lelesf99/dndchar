import FormContainer from '../../components/FormContainer';
import LoginForm from '../../components/LoginForm';
import React from 'react';

import { Navigate } from "react-router-dom";

export default function Login(props) {
    return (
        !props.user
            ? <FormContainer logo={true}>
                <LoginForm></LoginForm>
            </FormContainer>
            : <Navigate to={`${props.user.uid}`} />
    );
}