import React, { Component } from 'react'
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomerregistrationAPI from '../services/CustomerregistrationAPI';
import LoginAPI from '../services/LoginAPI';

export default class Allregisteredusers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            status: "active",
            message: null
        }
        this.UpdateUserStatus = this.UpdateUserStatus.bind(this);
        this.reloadUsersList = this.reloadUsersList.bind(this);
        this.toggler = this.toggler.bind(this);
    }

    componentDidMount() {
        this.reloadUsersList();
        if (sessionStorage.getItem("role") == null) {
            window.location = "/"
        }
    }

    reloadUsersList() {
        CustomerregistrationAPI.fetchAllCustomers()
            .then((resp) => {
                this.setState({
                    users: resp.data,
                    message: "Users list rendered successfully"
                })
                console.log(this.state.message);
            });
    }

    UpdateUserStatus(lid, stat1) {
        LoginAPI.UpdateStatus(lid, stat1).then((resp) => {
            this.setState({
                message: "Users list rendered successfully"
            })
            console.log(this.state.message);
            this.reloadUsersList();
        });
    }

    toggler(lid, st) {
        console.log(lid, st);
        if (st === 'inactive') {
            let stat1 = 'active';
            this.UpdateUserStatus(lid, stat1);
        }
        else {
            let stat1 = 'inactive';
            this.UpdateUserStatus(lid, stat1);
        }

        console.log(this.state.status);
    }

    logout() {
        LoginAPI.logoutAdmin()
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <Nav className='justify-content-end'>
                        <Nav.Link as={Link} onClick={this.logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " to="/home">Logout</Nav.Link>
                    </Nav>
                    {this.state.users.length === 0 ? <h3>No users in database</h3> :
                        <div> <h3 className='text-light'>All Registered Users List</h3>

                            <table className="table text-light table-bordered">
                                <thead className="bg-dark text-light">
                                    <tr>
                                        <th className="visually-hidden">Id</th>
                                        <th>LoginId</th>
                                        <th>Email</th>
                                        <th>UserType</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map(
                                            users =>
                                                <tr key={users.loginid}>
                                                    <td className="visually-hidden">{users.loginid}</td>
                                                    <td>{users.loginid}</td>
                                                    <td>{users.email}</td>
                                                    <td>{users.usertype}</td>
                                                    <td><Button onClick={() => { this.toggler(users.loginid, users.status) }}>{users.status}</Button></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </>
        );
    }
}