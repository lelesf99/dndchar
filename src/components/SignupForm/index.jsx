import './style.css';
import Button from '../Button';
import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function getPasswordLevel(str) {
    let level = 0;
    if (str.length >= 6) {
        if (str.search(/[a-z]/g) !== -1) level++;
        if (str.search(/[A-Z]/g) !== -1) level++;
        if (str.search(/([0-9])/g) !== -1) level++;
        if (str.search(/([^A-Za-z0-9])/g) !== -1) level++;
    };
    return level;
}

export default function SignupForm() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passRepeat, setPassRepeat] = useState("");
    const [success, setSuccess] = useState("Voltar");

    const [userNameValidation, setUserNameValidation] = useState({
        check: -1,
        class: ""
    });
    const [emailValidation, setEmailValidation] = useState({
        check: -1,
        class: ""
    });
    const [passwordValidation, setPasswordValidation] = useState({
        check: -1,
        class: ""
    });
    const [passRepeatValidation, setPassRepeatValidation] = useState({
        check: -1,
        class: ""
    });

    const [passwordMeter, setPasswordMeter] = useState(0);


    const [result, setResult] = useState({
        errorMessage: "",
        errorClass: ""
    });

    const [loading, setloading] = useState(false);


    function handleInputChange(e) {

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        switch (name) {
            case "userName":
                setUserName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "passRepeat":
                setPassRepeat(value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (userName === "") {
            setUserNameValidation({
                check: -1,
                class: ""
            });
        } else {
            setUserNameValidation({
                check: 1,
                class: ""
            });
        }
    }, [userName]);
    useEffect(() => {
        if (email === "") {
            setEmailValidation({
                check: -1,
                text: ""
            });
        } else {
            setEmailValidation({
                check: 1,
                class: ""
            });
        }
    }, [email]);
    useEffect(() => {

        let level = getPasswordLevel(password);

        setPasswordMeter(level);
        if (password === "") {
            setPasswordValidation({
                check: -1,
                class: ""
            });
        } else if (level === 0) {
            setPasswordValidation({
                check: -3,
                class: ""
            });
        } else if (passRepeat !== password) {
            setPasswordValidation({
                check: -2,
                class: ""
            });
        } else {
            setPasswordValidation({
                check: 1,
                class: ""
            });
        }
    }, [password, passRepeat]);

    useEffect(() => {
        if (passRepeat === "") {
            setPassRepeatValidation({
                check: -1,
                class: ""
            });
        } else if (passRepeat !== password) {
            setPassRepeatValidation({
                check: -2,
                class: ""
            });
        } else {
            setPassRepeatValidation({
                check: 1,
                class: ""
            });
        }
    }, [passRepeat, password]);
    function submitBtn() {
        // Validação formulário
        let validCheck = true;
        setloading(true);

        if (userNameValidation.check === -1) {
            setUserNameValidation({
                check: -1,
                class: "fail"
            });
            setResult({
                errorMessage: "Preencha os campos destacados",
                errorClass: "fail"
            })
            validCheck = false;
        }
        if (emailValidation.check === -1) {
            setEmailValidation({
                check: -1,
                class: "fail"
            });
            setResult({
                errorMessage: "Preencha os campos destacados",
                errorClass: "fail"
            })
            validCheck = false;
        }
        if (passwordValidation.check === -1) {
            setPasswordValidation({
                check: -1,
                class: "fail"
            });
            setResult({
                errorMessage: "Preencha os campos destacados",
                errorClass: "fail"
            })
            validCheck = false;
        } else if (passwordValidation.check === -2) {
            setPasswordValidation({
                check: -1,
                class: "fail"
            });
            setResult({
                errorMessage: "As senhas não são iguais!",
                errorClass: "fail"
            })
            validCheck = false;
        } else if (passwordValidation.check === -3) {
            setPasswordValidation({
                check: -1,
                class: "fail"
            });
            setResult({
                errorMessage: "Senha muito fraca!",
                errorClass: "fail"
            })
            validCheck = false;
        }
        if (passRepeatValidation.check === -1) {
            setPassRepeatValidation({
                check: -1,
                class: "fail"
            });
            setResult({
                errorMessage: "Preencha os campos destacados",
                errorClass: "fail"
            })
            validCheck = false;
        } else if (passRepeatValidation.check === -2) {
            setPassRepeatValidation({
                check: -1,
                class: "fail"
            });
            setResult({
                errorMessage: "As senhas não são iguais!",
                errorClass: "fail"
            })
            validCheck = false;
        }
        if (!validCheck) {
            setloading(false);
            return;
        }
        const data = {
            userName: userName,
            email: email,
            password: password
        }
        var xhr = new XMLHttpRequest();

        xhr.open("POST", 'https://us-central1-dndchar-143e9.cloudfunctions.net/newUser');

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE) {
                let res = this.response
                try {
                    res = JSON.parse(this.response);
                } catch (error) {
                    console.error(error);
                }

                console.log(res);
                setloading(false);
                switch (res.code) {
                    case "auth/email-already-exists":
                        setResult({
                            errorMessage: "Email já utilizado!",
                            errorClass: "fail"
                        });
                        setEmailValidation({
                            check: -1,
                            class: "fail"
                        });
                        break;

                    case "auth/invalid-email":
                        setResult({
                            errorMessage: "Email inválido!",
                            errorClass: "fail"
                        });
                        setEmailValidation({
                            check: -1,
                            class: "fail"
                        });
                        break;

                    case "auth/weak-password":
                        setResult({
                            errorMessage: "Senha muito fraca!",
                            errorClass: "fail"
                        });
                        setPasswordValidation({
                            check: -1,
                            class: "fail"
                        });
                        break;
                    case "auth/uid-already-exists":
                        setResult({
                            errorMessage: "Nome de usuário já utilizado",
                            errorClass: "fail"
                        });
                        setUserNameValidation({
                            check: -1,
                            class: "fail"
                        });
                        break;
                    case "db/add-doc-error":
                        setResult({
                            errorMessage: "Algo deu errado!",
                            errorClass: "fail"
                        });
                        break;

                    case undefined:
                        setResult({
                            errorMessage: "Cadastro realizado!",
                            errorClass: "success"
                        });
                        setSuccess("Entrar")
                        break;
                    default:
                        setResult({
                            errorMessage: "Algo deu errado!",
                            errorClass: "fail"
                        });
                }
            } else {
                setloading(false);
            }
        }
        xhr.send(JSON.stringify(data));
    }

    return (
        <form className="form" onSubmit={() => { return false }}>

            <input onChange={(e) => handleInputChange(e)} className={`input ${userNameValidation.class}`} value={userName} name="userName" type="text" placeholder="Nome de usuário" />
            <input onChange={(e) => handleInputChange(e)} className={`input ${emailValidation.class}`} value={email} name="email" type="email" placeholder="E-mail" autoComplete="email" />
            <div className="new-password-wrapper">
                <input onChange={(e) => handleInputChange(e)} id="passwordInput" className={`input ${passwordValidation.class}`} value={password} name="password" type="password" placeholder="Senha" autoComplete="new-password" />
                <label htmlFor="passwordInput" className={`password-meter-msg level${passwordMeter}`}></label>
                <label htmlFor="passwordInput" className={`password-meter level${passwordMeter}`}></label>
            </div>
            <input onChange={(e) => handleInputChange(e)} className={`input ${passRepeatValidation.class}`} value={passRepeat} name="passRepeat" type="password" autoComplete="" placeholder="Confirme sua senha" />

            <div className="button-group">
                <Button submit={submitBtn} disabled={loading} className={loading ? "signup loading-form" : "signup"}><AiOutlineLoading3Quarters /> <span>Cadastrar</span></Button>
                <Button href="/" className="sec" pageLink={true}>{success}</Button>
            </div>
            <div className={`result ${result.errorClass}`}>{result.errorMessage}</div>
        </form>

    );
}
