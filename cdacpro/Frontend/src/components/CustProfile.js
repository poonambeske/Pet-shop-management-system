import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import CustNavBar from './CustNavBar'

export default class CustProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: null,
            lname: null,
            address: null,
            contactno: null,
            email: null
        }
    }
    componentDidMount() {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        console.log(cust);
        this.setState({
            fname: cust.fname,
            lname: cust.lname,
            address: cust.address,
            contactno: cust.contactno,
            email: cust.loginid.email
        });
        if (sessionStorage.getItem("role") == null) {
            window.location.href = "/";
        }
    }
    render() {
        return (
            <div>
                <CustNavBar />
                <h2 className='text-light mt-5'>CustProfile</h2>
                <Container className='bg-dark rounded' style={{ minHeight: 250, width: 400 }}>
                    <h5 className='text-light pt-3 mb-4'>First Name: {this.state.fname}</h5>
                    <h5 className='text-light mb-4'>Last Name: {this.state.lname}</h5>
                    <h5 className='text-light mb-4'>Address: {this.state.address}</h5>
                    <h5 className='text-light mb-4'>Contact Number: {this.state.contactno}</h5>
                    <h5 className='text-light mb-4'>Email: {this.state.email}</h5>
                </Container>
            </div>

        )
    }
}
