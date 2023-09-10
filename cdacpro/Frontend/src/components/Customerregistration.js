import React, { Component } from "react";
import { Nav } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import CustomerregistrationAPI from "../services/CustomerregistrationAPI";

export default class Customerregistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            fname: '',
            lname: '',
            address: '',
            contactno: '',
            message: null
        }

        this.onChange = this.onChange.bind(this);
        this.customerreg = this.customerreg.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateMobileNumber = this.validateMobileNumber.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    validatePassword() {
        let password = document.getElementById("pwd").value;
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;;

        if (regexPassword.test(password) === true) {
            document.getElementById("passwordVr").innerHTML = "";
        } else {
            document.getElementById("passwordVr").innerHTML = "password must be alphanumeric and should contains at least a special character with length 5"
        }

    }

    validateEmail() {
        let email = document.getElementById("email").value;
        var regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(email) === true) {
            document.getElementById("emailVr").innerHTML = "";
        } else {
            document.getElementById("emailVr").innerHTML = "email format should be 'abc@gmail.com'"

        }

    }
    removeWarnings() {
        document.getElementById("passwordVr").innerHTML = "";
        document.getElementById("emailVr").innerHTML = "";
        document.getElementById("mobileNumberVr").innerHTML = "";

    }

    validateMobileNumber() {
        let number = document.getElementById('mobileNumber').value;
        if (/^\d{10}$/.test(number)) {
            document.getElementById("mobileNumberVr").innerHTML = "";

        } else {
            document.getElementById("mobileNumberVr").innerHTML = "Phone number must be 10 digits.";

            return false
        }
    }


    customerreg = e => {

        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            fname: this.state.fname,
            lname: this.state.lname,
            address: this.state.address,
            contactno: this.state.contactno
        };

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
        if (this.state.password !== this.state.confirmPassword) {
            toast.error("Password mismatch", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (this.state.fname === '') {
            toast.error("Please enter first name", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (this.state.lname === '') {
            toast.error("Please enter last name", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (this.state.address === '') {
            toast.error("Please enter address", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (this.state.contactno === '' || this.state.contactno.length !== 10) {
            toast.error("Please enter valid contact number", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        /* if (this.state.contactno.length !== 10) {
             toast.error("Please enter valid contact number", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
             return false;
         }*/

        CustomerregistrationAPI.custreg(user).then(() => {
            this.setState({
                //message: 'registration successful.',
                message: '',
                email: '',
                password: '',
                confirmPassword: '',
                fname: '',
                lname: '',
                address: '',
                contactno: ''
            });

            console.log(user);
            toast.success('registration successful.');

        }).catch(error => {
            this.setState({ message: 'Registration failed.' });
            toast.error('Registration failed.', { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
            //err.response.data => DTO on the server side : ErrorResponse
            console.log(error);
        });
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div>
                <div className="container overflow-hidden mb-5" style={{ minHeight: "100vh" }}>
                    <div className="row my-3">
                        <div className="col-sm-8">
                            <h2 className="text-light offset-8">User Registration</h2>
                        </div>
                    </div>
                    <form className="mb-5">
                        <div className="form-group row my-2 justify-content-center">
                            <label htmlFor="email" className="col-2 text-light col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" value={this.state.email} onChange={this.onChange} onFocus={this.removeWarnings} onBlur={this.validateEmail} /><span style={{ color: 'red' }} id='emailVr'></span>
                            </div>
                        </div>
                        <div className="form-group row my-2 justify-content-center">
                            <label htmlFor="pwd" className="col-2 text-light col-form-label">Password</label>
                            <div className="col-5">
                                <input type="password" id="pwd" className="form-control" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} onBlur={this.validatePassword} onFocus={this.removeWarnings} /><span style={{ color: 'red' }} id='passwordVr'></span>

                            </div>
                        </div>
                        <div className="form-group row my-2 justify-content-center">
                            <label htmlFor="password" className="col-2 text-light col-form-label">Confirm Password</label>
                            <div className="col-5">
                                <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} required />

                            </div>
                        </div>
                        <div className="form-group row my-2 justify-content-center">
                            <label htmlFor="firstName" className="col-2 text-light col-form-label">First Name</label>
                            <div className="col-5">
                                <input type="text" id="firstName" className="form-control" placeholder="Enter your first name" name="fname" value={this.state.fname} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row my-2 justify-content-center">
                            <label htmlFor="lastName" className="col-2 text-light col-form-label">Last Name</label>
                            <div className="col-5">
                                <input type="text" id="lastName" className="form-control" placeholder="Enter your last name" name="lname" value={this.state.lname} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row mt-2 justify-content-center">
                            <label htmlFor="address" className="col-2 text-light col-form-label">Address</label>
                            <div className="col-5">
                                <input type="text" className="form-control" placeholder="Enter your address " name="address" value={this.state.address} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row my-2 justify-content-center">
                            <label htmlFor="contactNumber" className="col-2 text-light col-form-label">Contact Number</label>
                            <div className="col-5">
                                <input type="number" id="mobileNumber" className="form-control" placeholder="Enter your contact number" name="contactno" value={this.state.contactno} onChange={this.onChange} pattern="[0-9]{10}" onBlur={this.validateMobileNumber} onFocus={this.removeWarnings} required /><span id='mobileNumberVr' style={{ color: 'red' }}></span>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">
                            <h4 className="text-light display-flex">{this.state.message}</h4>
                            <div className="offset-9" >
                                <button className="btn btn-lg btn-primary text-uppercase mt-3" onClick={this.customerreg}>Register</button>
                            </div>
                            <div>
                                <Nav.Link as={Link} to='/login'><h6 className='btn btn-success text-uppercase'>Click to Login</h6></Nav.Link>
                            </div>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        );
    }
}