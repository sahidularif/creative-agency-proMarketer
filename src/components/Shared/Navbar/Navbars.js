import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import brand from '../../../images/logo/brand4.png';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
const Navbars = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" className="align-top pl-5 mb-5 pr-5 m-0 text-center" style={{ color: 'black', fontWeight: 'bold' }}>
            <Nav activeKey="/home">
                <Navbar.Brand href="#home">
                    <img
                        src={brand}
                        width="50%"
                        className="d-inline-block align-top img-fluid m-0"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="align-items-center justify-content-end">
                <Nav className="" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className="text-dark" href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-dark" href="/home">Our Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-dark" href="/home">Our Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-dark" href="/home">Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>

                        {
                            loggedInUser.email ?
                            <Nav.Link>
                                <Link to="/dashboard"><span className="rounded-pill btn btn-dark text-light">Dashboard</span></Link>
                            </Nav.Link>
                            :
                            <Nav.Link>
                                <Link to="/login"><span className="rounded-pill btn btn-dark text-light">Sign in</span></Link>
                            </Nav.Link>

                        }

                    </Nav.Item>
                </Nav>


            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;