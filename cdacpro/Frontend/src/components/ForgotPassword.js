import React, { Component } from 'react'
import { Button, Modal, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoginAPI from '../services/LoginAPI';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            flag: false,
            password: null,
            msg: null,
            show: false,
            message: null
        }

        this.verifyemail = this.verifyemail.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleshow = this.handleshow.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    verifyemail = e => {
        e.preventDefault();
        /*if (this.state.email === '') {
            toast.error("Email cannot be null", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }*/
        var regexEmail = /\S+@\S+\.\S+/;
        if (this.state.email === '' || regexEmail.test(this.state.email) !== true) {
            toast.error("Please enter valid email", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }


        LoginAPI.forgotpass(this.state.email)
            .then(response => {
                //console.log(localStorage.setItem("role", response.data));
                //console.log(response.data.userFirstName)
                this.setState({
                    message: response.data,
                    show: true
                });
                console.log(this.state.message);
            })
            .catch(error => {
                this.setState({ msg: error })
                toast.error(this.state.message, { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
                //err.response.data => DTO on the server side : ErrorResponse


                console.log(error);
            });

    }
    handleClose() {
        this.setState({ show: false })
    }

    handleshow(value) {
        this.setState({ show: true, upid: value })
        alert("show loaded" + value)
    }

    saveChanges(val) {
        console.log(val, this.state.message);
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;;
        if (this.state.password === '' || regexPassword.test(this.state.password) !== true) {
            toast.error("Please enter valid password", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        LoginAPI.savechanges(this.state.message, val).then(
            (resp) => {
                console.log(resp.data);
                this.setState({
                    msg: resp.data,
                    email: '',
                    password: '',
                    flag: true,
                    show: false
                })
            }
        )

        //window.location.href = "/login";
    }

    render() {
        return (
            <div className="container overflow-hidden mb-5" >
                <div className="row my-3">
                    <div className="col-sm-8">
                        <h2 className="text-light offset-6">Forgot Password</h2>
                    </div>
                    <div className="col-sm-4">
                        <Nav.Link as={Link} to='/home'><h6 className='btn btn-secondary text-uppercase offset-8'>Go Back</h6></Nav.Link>
                    </div>
                </div>
                <form className="container rounded bg-light pt-2" style={{ width: "30vw" }}>
                    <div className="form-group">
                        <label>Enter Email to be searched:</label>
                        <input id="email" type="email" className="form-control text-center mt-3" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.onChange} />
                    </div><br></br>
                    <div className="row my-7">
                        <div className="col-sm-7">
                            <button className="btn btn-primary text-uppercase mb-3 offset-8" onClick={this.verifyemail}>Search</button>
                            <ToastContainer />
                        </div>
                        <h5>{this.state.msg}</h5>
                    </div>
                </form><br></br>

                {this.state.flag === true ? <Nav.Link as={Link} to='/login'><h6 className='btn btn-success text-uppercase'>Click here to login</h6></Nav.Link> : ""}

                <span id="span"></span>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Updating password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="password" className="form-control" placeholder="Enter password " name="password" value={this.state.password} onChange={this.onChange} required />
                        <Button variant="primary" onClick={() => { this.saveChanges(this.state.password) }}>
                            Save Changes
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
