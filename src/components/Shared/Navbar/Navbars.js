import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import brand from '../../../images/logo/brand.png';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
const Navbars = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" className="m-0 justify-content-center align-items-center text-center" bg="dark" style={{color:'white'}}>
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
            <Navbar.Collapse id="responsive-navbar-nav" className="">
                <Nav className="mr-auto">
                    <Nav.Link style={{color:'white'}} href="/">Home</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="#pricing">About Us</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="#pricing">Projects</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="#pricing">Contact</Nav.Link>
                    <Nav.Link style={{color:'white'}} href="/dashboard">Admin</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">
                        {
                            loggedInUser.email ? <Link to="/dashboard"><button className="btn btn-light">Dashboard</button></Link> :
                            ' '
                        }
                    </Nav.Link>
                    <Nav.Link to="/login" eventKey={2} href="/login">
                        <Button className="btn-dark">Login</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;