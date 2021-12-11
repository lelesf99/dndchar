import Button from '../Button';
import React, { useState, useEffect } from 'react';
import { login } from '../../Utils';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailValidation, setEmailValidation] = useState({
        check: false,
        class: ""
    });
    const [passwordValidation, setPasswordValidation] = useState({
        check: false,
        class: ""
    });

    const [result, setResult] = useState({
        errorMessage: "",
        errorClass: ""
    });


    function handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        if (email === "") {
            setEmailValidation({
                check: false,
                class: ""
            });
        } else {
            setEmailValidation({
                check: true,
                class: ""
            });
        }
    }, [email]);
    useEffect(() => {
        if (password === "") {
            setPasswordValidation({
                check: false,
                class: ""
            });
        } else {
            setPasswordValidation({
                check: true,
                class: ""
            });
        }
    }, [password]);

    function loginBtn() {
        // Validação formulário
        let validCheck = true;
        if (!emailValidation.check) {
            setEmailValidation({
                check: false,
                class: "fail"
            });
            setResult({
                errorMessage: "Preencha os campos destacados",
                errorClass: "fail"
            })
            validCheck = false;
        }
        if (!passwordValidation.check) {
            setPasswordValidation({
                check: false,
                class: "fail"
            });
            setResult({
                errorMessage: "Preencha os campos destacados",
                errorClass: "fail"
            })
            validCheck = false;
        }
        if (!validCheck) return;

        login(email, password).then((r) => {
            setResult(r);
        });
    }

    return (
        <form className="form">
            <input onChange={(e) => handleInputChange(e)} className={`input ${emailValidation.class}`} value={email} name="email" type="email" placeholder="E-mail" autoComplete="email" />
            <input onChange={(e) => handleInputChange(e)} className={`input ${passwordValidation.class}`} value={password} name="password" type="password" placeholder="Senha" autoComplete="password" />
            <div className="button-group">
                <Button submit={loginBtn}><span>Entrar</span></Button>
                <Button href="/signup" className="sec" pageLink={true}><span>Cadastrar</span></Button>
            </div>
            <div className={`result ${result.errorClass}`}>{result.errorMessage}</div>
        </form >
    );
}
