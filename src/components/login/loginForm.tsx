import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

const loginForm = () => {
    const [openModelLogin, setOpenModelLogin] = useState(false);

    const handleClose = () => setOpenModelLogin(false);
    const handleShow = () => setOpenModelLogin(true);

    return (
        <>
            <Modal
                show={openModelLogin}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Member Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form >
                    <FormGroup><i className="fa fa-user"></i><Input type="text" class="form-control" placeholder="Username" required={true}></Input></FormGroup>
                    <FormGroup><i className="fa fa-lock"></i><Input type="password" class="form-control" placeholder="Password" required={true}></Input></FormGroup>
                    <FormGroup><Input type="submit"class="btn btn-primary btn-block btn-lg" value="Login"></Input></FormGroup> 
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