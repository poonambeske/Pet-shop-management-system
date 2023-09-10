import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginAPI from '../services/LoginAPI';
import Allregisteredusers from './Allregisteredusers';

export default class AdminDashboard extends Component {
    /*componentDidMount() {
        if (sessionStorage.getItem("role") == null) {
            window.location = "/"
        }
    }*/

    logout() {
        LoginAPI.logoutAdmin()
    }

    render() {
        return (
            <>
                <Allregisteredusers />

            </>
        );
    }
}