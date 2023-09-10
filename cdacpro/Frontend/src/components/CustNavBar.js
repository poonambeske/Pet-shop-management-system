import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginAPI from '../services/LoginAPI'

export default class CustNavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            custfname: null,
            message: null
        }

        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        this.setState({ custfname: cust.fname });
        if (sessionStorage.getItem("role") == null) {
            window.location.href = "/";
        }
    }

    logout() {
        LoginAPI.logoutAdmin()
    }

    render() {
        return (
            <><div><h3 className='text-light text-left offset-9'>Hi! {this.state.custfname}</h3></div>

                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link className="btn btn-link btn-primary text-light text-uppercase text-decoration-none " as={Link} to="/searchpet">Search pet</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className="btn btn-link btn-primary text-light text-uppercase text-decoration-none " as={Link} to='/viewopets'>My Pets</Nav.Link>
                            </Nav>
                            <Nav className='me-auto'>
                                <Nav.Link className="btn btn-link btn-primary text-light text-uppercase text-decoration-none " as={Link} to="/petregistration">Add pet</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className="btn btn-link btn-primary text-light text-uppercase text-decoration-none " as={Link} to='/cart'>Cart</Nav.Link>
                            </Nav>
                            <Nav >
                                <Nav.Link className=" btn btn-link btn-primary text-light text-uppercase text-decoration-none " as={Link} to="/profile">Profile</Nav.Link>
                            </Nav>
                            <Nav className='justify-content-end'>
                                <Nav.Link as={Link} onClick={this.logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " to="/home">Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse></Container>
                </Navbar></>
        )
    }
}
