import { FormEvent, useState } from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import FormData from 'form-data';
import Index from './index';

const addUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState({});
    const [status, setStatus] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [statusError, setStatusError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const changeFirstName = (firstName: string) => {
        setFirstName(firstName);
    }
    const changeLastName = (lastName: string) => {
        setLastName(lastName);
    }
    const changeEmail = (email: string) => {
        setEmail(email);
    }
    const changeUserName = (userName: string) => {
        setUserName(userName);
    }
    const changePassword = (password: string) => {
        setPassword(password);
    }
    const changeConfirmPassword = (confirmPassword: string) => {
        setConfirmPassword(confirmPassword);
    }
    const changeImage = (e: any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const changeStatus = (e: any) => {
        if (e.target.checked) {
            setStatus('active');
        } else {
            setStatus('');
        }
    }
    
    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('first_name', firstName ? firstName : '');
        formData.append('last_name', lastName ? lastName : '');
        formData.append('email', email ? email : '');
        formData.append('user_name', userName ? userName : '');
        formData.append('password', password ? password : '');
        formData.append('confirm_password', confirmPassword ? confirmPassword : '');
        formData.append('image', image ? image : {});
        formData.append('status', status ? status : '');
        try {
            await axios.post('http://localhost:5000/users/addUser', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).
                then((res) => {
                    let data = res.data;
                    if (!data.status) {
                        setEmailError(data.errorField.includes('email'));
                        setUserNameError(data.errorField.includes('user_name'));
                        setPasswordError(data.errorField.includes('password'));
                        setConfirmPasswordError(data.errorField.includes('confirm_password'));
                        setStatusError(data.errorField.includes('status'));
                        setErrorMessage(data.errorMessage);
                    } else {
                        window.location.href = '/';
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        } catch(err) {
            console.log(err);
        }
        return true;
    }

    return (
        <>
            <div className="signup-form">
                <Form onSubmit={(e) => submitForm(e)} encType="multipart/form-data">
                    {errorMessage !== '' ? <h6 style={{color: 'red'}}>{errorMessage}</h6> : ''}
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input type="text" className="form-control" name="first_name"  value={firstName} onChange={(e) => changeFirstName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input type="text" className="form-control" name="last_name" value={lastName} onChange={(e) => changeLastName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email" className={emailError ? 'has-error' : ''} name="email" value={email} onChange={(e) => changeEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="user_name">Username</Label>
                        <Input type="text" className={userNameError ? "has-error" : ''} name="user_name" value={userName} onChange={(e) => changeUserName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" className={passwordError ? "has-error" : ''} name="password" value={password} onChange={(e) => changePassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirm_password">Confirm Password</Label>
                        <Input type="password" className={confirmPasswordError ? "has-error" : ''} name="confirm_password" value={confirmPassword} onChange={(e) => changeConfirmPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Image">Avatar</Label>
                        <Input type="file" className="form-control" name="image" onChange={(e) => changeImage(e)}/>
                    </FormGroup>
                    <FormGroup className="form-group" check>
                        <Label check className="form-check-label">
                            <Input className={statusError ? "has-error" : ''} type="checkbox" name="status" onChange={(e) => changeStatus(e)} checked={status !== '' ? true : false}/>{' '}
                            I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
                        </Label>
                    </FormGroup>
                    <FormGroup><Button type="submit" className="btn btn-primary btn-lg">Sign Up</Button></FormGroup>
                </Form>
                <div className="text-center">Already have an account? <a href="#">Login here</a></div>
            </div>
        </>
    );
};

export default addUser;