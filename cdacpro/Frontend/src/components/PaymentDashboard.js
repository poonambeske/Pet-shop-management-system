import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class PaymentDashboard extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            address: null,
        }
    }
    componentDidMount() {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        console.log(cust);
        this.setState({

            address: cust.address,


        });

    }
    render() {
        return (
            <div><br></br>
                <Nav.Link as={Link} to='/cart'><h6 className='btn btn-secondary offset-9'>Go back</h6></Nav.Link>
                <h2 className='text-light'>Your order has been placed</h2>
                <h4 className='text-light'>Payment method : Cash On Delivery</h4>
                <h4 className='text-light'>Address for delivery is : {this.state.address} </h4>
                <br></br>
                <Nav.Link as={Link} to='/searchpet'><h6 className='btn btn-primary'>Continue Shopping</h6></Nav.Link>
            </div>
        )
    }
}
