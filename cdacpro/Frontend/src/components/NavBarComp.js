import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";

export default function NavBarComp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container> <Navbar.Brand className="text-light" href="#home">Online PetShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                        </Nav>
                        <Button variant="primary" onClick={handleShow}>
                            About us
                        </Button>

                    </Navbar.Collapse></Container>
            </Navbar>
            <Offcanvas placement="top" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>About us</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Online pet shop system is a platform which provides customers a facility to buy pets in online and sellers to sell without any hassle. It is a web-based system and it will save valuable time and effort of customers and sellers.
                    Some additional features are- system allows the customers to search for product. The system displays all the pets details such as petid, name, price and age of pet etc. After searching in the system, it will display the list of available product and allows customer to choose a particular product. Then the system checks for the availability of pet in the shop. After the whole process the customers add to cart the product and buy. The important reason is to make-work easy.
                    Regards, from creators:
                    <li>Kiran Jagtap</li>
                    <li>Abhilash Patil</li>
                    <li>Abhishek Kendre</li>
                    <li>Sachin Kamble</li>
                    <li>Shubham Rawalkar</li>
                    <li>Gaurav Patil</li>
                </Offcanvas.Body>
            </Offcanvas>
        </div>

    )

}