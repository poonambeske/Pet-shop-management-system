import React, { Component } from 'react'
import LoginAPI from '../services/LoginAPI';
import { Nav } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            message: null
        }

        this.userlogin = this.userlogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    userlogin = e => {
        /*if (this.state.email === '') {
            toast.error("Email cannot be null", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (this.state.password === '') {
            toast.error("Password cannot be null", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }*/
        e.preventDefault();
        var regexEmail = /\S+@\S+\.\S+/;
        if (this.state.email === '' || regexEmail.test(this.state.email) !== true) {
            toast.error("Please enter valid email", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;;
        if (this.state.password === '' || regexPassword.test(this.state.password) !== true) {
            toast.error("Please enter valid password", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }

        LoginAPI.Login(this.state.email, this.state.password)
            .then(response => {

                console.log(response.data);
                this.setState({ message: 'Login successful.' });
                toast.success('Login successful.');
                console.log(response.data.loginid.usertype);
                sessionStorage.setItem("role", response.data.loginid.usertype);

                let role = sessionStorage.getItem("role");
                console.log(role);

                if (response.data.loginid.usertype === "customer") {
                    sessionStorage.setItem("customer", JSON.stringify(response.data));
                    window.location.href = "/customerDashboard";
                }
                else {
                    sessionStorage.setItem("admin", JSON.stringify(response.data));
                    window.location.href = "/adminDashboard";
                }
            })
            .catch(error => {
                this.setState({ message: 'Invalid email or password' });
                toast.error('Invalid email or password', { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
                //err.response.data => DTO on the server side : ErrorResponse


                console.log(error);
            });

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div className="container overflow-hidden mb-5" >
                <div className="row my-3">
                    <div className="col-sm-8">
                        <h2 className="text-light offset-6">User Login</h2>
                    </div>
                    <div className="col-sm-4">
                        <Nav.Link as={Link} to='/home'><h6 className='btn btn-secondary text-uppercase offset-8'>Go Back</h6></Nav.Link>
                    </div>
                </div>
                <form className="container rounded bg-light pt-2" style={{ width: "30vw" }}>
                    <div className="form-group">
                        <input id="email" type="email" className="form-control text-center mt-3" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group my-3">
                        <input type="password" className="form-control text-center" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-7">
                            <button className="btn btn-success text-uppercase mb-1 offset-8" onClick={this.userlogin} >LOGIN</button>
                            <ToastContainer />
                        </div>
                        <h5>{this.state.message}</h5>
                    </div>
                    <div>
                        <Nav.Link as={Link} to='/forgotPassword'><h6 className='btn btn-link mb-2 '>Forgot Password</h6></Nav.Link>
                    </div>
                    <div>
                        <p>No..Account? Create Here:</p>
                        <Nav.Link as={Link} to='/customerregistration'><h6 className='btn btn-primary mb-4'>Sign Up</h6></Nav.Link>
                    </div>
                </form>
                <span id="span"></span>

            </div>


        );
    }
}
