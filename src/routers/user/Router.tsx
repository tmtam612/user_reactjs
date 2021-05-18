import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Index from '../../components/users/index';
import AddUser from '../../components/users/AddUser';
import LoginForm from '../../components/login/loginForm';

const router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/users/addUser">
                        <AddUser />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>  
    );
}
export default router;