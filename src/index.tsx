import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import reportWebVitals from './reportWebVitals';
import UserList from './components/users/index';
import AddUser from './components/users/AddUser';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Router from "./routers/user/Router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
