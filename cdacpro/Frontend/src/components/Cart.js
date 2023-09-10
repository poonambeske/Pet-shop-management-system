import React, { Component } from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomerregistrationAPI from '../services/CustomerregistrationAPI';
import LoginAPI from '../services/LoginAPI';

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            message: null,
            custdetails: '',
            removeitem: ''
        }
        this.custcartdetails = this.custcartdetails.bind(this);
        this.onRemoveOrder = this.onRemoveOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout() {
        LoginAPI.logoutAdmin()
    }

    componentDidMount() {
        this.custcartdetails();
        console.log(sessionStorage.getItem("customer"));
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        this.setState({ custfname: cust.fname });
        if (sessionStorage.getItem("role") == null) {
            window.location.href = "/";
        }
    }

    custcartdetails() {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        let custid = cust.cid;
        console.log(custid)
        CustomerregistrationAPI.cartdetails(custid).then((resp) => {
            this.setState({
                users: resp.data,
                message: "Users list rendered successfully"
            })
            console.log(resp.data);
        })
    }

    onRemoveOrder = orderid => {
        if (window.confirm("Are you sure you want to remove this order?")) {
            CustomerregistrationAPI.deletecartitems(orderid)
                .then(res => {
                    this.setState({ message: "Order deleted successfully." })
                    console.log(this.state.message, 'Order ID: ', orderid);
                    this.setState({ users: this.state.users.filter(users => users.order_id !== orderid) });
                })
        } else
            console.log("request cancelled");
    }

    confirmOrder() {
        CustomerregistrationAPI.deletecartdetails().then((resp) => {
            this.setState({ message: "Order deleted successfully." });
            window.location.href = "/paymentDashboard";
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className='text-light text-left'>Hi! {this.state.custfname}</h3>
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
                                    <Nav.Link className="btn btn-link btn-primary text-light text-uppercase text-decoration-none " as={Link} to='/cart'>Cart<Badge bg="secondary">{this.state.users.length}</Badge></Nav.Link>
                                </Nav>
                                <Nav >
                                    <Nav.Link className=" btn btn-link btn-primary text-light text-uppercase text-decoration-none " as={Link} to="/profile">Profile</Nav.Link>
                                </Nav>
                                <Nav className='justify-content-end'>
                                    <Nav.Link as={Link} onClick={this.logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " to="/home">Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse></Container>
                    </Navbar></div>
                <h3 className='text-light'>Cart</h3>
                <div className="container my-4">
                    {this.state.users.length === 0 ? "" :
                        <div> <h4 className='text-light'>All Cart Items List</h4>
                            <table className="table text-light table-bordered">
                                <thead className="bg-dark text-light">
                                    <tr>
                                        <th className="visually-hidden">Id</th>
                                        <th>OrderId</th>
                                        <th>PetId</th>
                                        <th>Price</th>
                                        <th>Breed</th>
                                        <th>Quantity</th>
                                        <th>Remove from cart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map(
                                            users =>
                                                <tr key={users.order_id}>
                                                    <td className="visually-hidden">{users.order_id}</td>
                                                    <td>{users.order_id}</td>
                                                    <td>{users.pid}</td>
                                                    <td>{users.totalprice}</td>
                                                    <td>{users.breed}</td>
                                                    <td>{users.quantity}</td>
                                                    <td><Button onClick={() => { this.onRemoveOrder(users.order_id) }}>Remove</Button></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <Button className="justify-content-center mt-2" onClick={this.confirmOrder}>Confirm Order</Button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
