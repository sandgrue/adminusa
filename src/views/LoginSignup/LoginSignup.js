import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiConnector from '../../backendConnect/apiService';
import { getLocalStorage, isItNull, setLocalStorage } from '../../containers/functions';

import img from '../../assets/img/adminMain.jpg';
import { useHistory } from 'react-router-dom';

const LoginSignup = () => {

    let history = useHistory();


    let token = getLocalStorage("tochen");

    if (!isItNull(token)) {
        history.push('/admin');
    }



    const [formData, setformData] = useState({ email: '', password: '' });


    const handlechage = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value, });
    }

    const logInside = () => {
        if (formData.email !== '' && formData.password !== '') {
            let data = {
                email: formData.email,
                password: formData.password
            }
            apiConnector("login", data)
                .then((res) => {
                    if (res.status === "SUCCESS") {
                        console.log(res, "working");
                        setLocalStorage('tochen', res.data.accessToken);
                        history.push('/admin');
                    } else {
                        console.log("API failure", 'working');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }


    console.log(getLocalStorage('tochen'));



    return (
        <>

            <div class="d-flex align-items-top w-100">
                <div class="w-45 leftLoginImage">
                    <div class="leftContent">
                        <div class="contentPositn">
                            <img src={require(`../../assets/img/logo2.svg`).default} />
                        </div>
                    </div>
                </div>
                <div class="w-75 rightFormPage">
                    <div class="d-flex flex-center rightCont">
                        <Form className="loginForm">
                            <div class="mb-5">
                                <h3>Welcome To Start</h3>
                                {/* <p>New Here? <a class="themeColor">Create Account</a></p> */}
                            </div>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    placeholder="name@example.com"
                                    autoComplete='off'
                                    onChange={handlechage} name="email"
                                    value={formData.email} />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <div class="d-flex align-items-center">
                                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                    <a class="themeColor forgotPass">Forgot Password?</a>
                                </div>

                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    placeholder="Password" onChange={handlechage} name="password"
                                    value={formData.password}
                                    autoComplete='off'
                                />
                            </Form.Group>
                            <div class="d-flex align-items-center">
                                <span class="usaBtn" onClick={logInside}>Sign In</span>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginSignup