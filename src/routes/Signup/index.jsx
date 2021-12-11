import FormContainer from '../../components/FormContainer';
import SignupForm from '../../components/SignupForm';
import React from 'react';

export default function Login() {
    return (
        <FormContainer logo={false}>
            <SignupForm></SignupForm>
        </FormContainer>

    );
}