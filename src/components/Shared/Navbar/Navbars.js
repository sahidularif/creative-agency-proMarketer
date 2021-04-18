import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import brand from '../../../images/logo/brand.png';
const Navbars = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="m-0" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={brand}
                    width="90"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Brand logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Projects</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    <Nav.Link href="#pricing">Admin</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link to="/login" eventKey={2} href="/login">
                        <Button>Login</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;