import React, { useState, useEffect, FormEvent } from 'react';
import { Modal } from 'react-bootstrap';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../../styles/style.scss"; 
import '../../styles/loginForm.scss';
import axios from 'axios';
const loginForm = () => {
    const [openModelLogin, setOpenModelLogin] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleClose = () => setOpenModelLogin(false);
    const handleShow = () => setOpenModelLogin(true);

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        const info = {
            user_name: userName,
            password: password,
        };
        try {
            await axios.post('http://localhost:5000/login', info).then(res => console.log(res)).catch(err => console.log(err));
        } catch (err) {
            
        }
    }

    return (
        <>
            <Modal
                show={openModelLogin}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-login"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Member Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={(e) => submitForm(e)}>
                    <FormGroup><i className="fa fa-user"></i><Input type="text"  placeholder="Username" required={true} value={userName} onChange={(e) => setUserName(e.target.value)}></Input></FormGroup>
                    <FormGroup><i className="fa fa-lock"></i><Input type="password" placeholder="Password" required={true} value={password} onChange={(e) => setPassword(e.target.value)}></Input></FormGroup>
                    <FormGroup><Button type="submit"className="btn btn-primary btn-block btn-lg">Login</Button></FormGroup> 
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <a href="#">Forgot Password?</a>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default loginForm;