import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import brand from '../../../images/logo/brand4.png';
import { AdminContext, UserContext } from '../../../App';

const Topbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
    return (


        <Navbar style={{color:'white', backgroundColor:'powderblue'}} className="border" >
            <Navbar.Brand href="/">
                <img
                    src={brand}
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Brand logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{color:'white', fontWeight:'bold'}}>
                    
                </Navbar.Text>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{color:'white'}}>
                    {isAdmin?<span>Sign In As admin:</span>:' Sign In As User'} <a href="#login" style={{color:'white', fontWeight:'bold'}}>{loggedInUser.name}</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Topbar;