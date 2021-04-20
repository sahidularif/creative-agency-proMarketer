import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
// import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHdd,
  faCommentAlt,
  faPlus,
  faUserPlus,
  faSignOutAlt,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { AdminContext, UserContext } from '../../../App';

const Sidebar = () => {

  // Admin context from App.js
  const [isAdmin, setIsAdmin] = useContext(AdminContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const signOut = () => {
    setLoggedInUser({});
  };
  
  return (
    <div className='sidebar d-flex flex-column justify-content-between py-5 px-4'>
      <ul className='list-unstyled'>

        {isAdmin ? (
          <>
            <li>
              <Link to='/orderList' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to='/addService' className='text-dark'>
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to='/addAdmin' className='text-dark'>
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to='/manageService' className='text-dark'>
                <FontAwesomeIcon icon={faTasks} /> <span>Manage service</span>
              </Link>
            </li>
            <li className="mt-5">
              <Link to='/addAdmin' className='text-dark'>
                <FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={signOut}>Sign out</span>
              </Link>
            </li>
          </>
        ) :
          <>
            <li>
              <Link to='/placeOrder' className='text-dark'>
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
              </Link>
            </li>

            <li>
              <Link to='/bookingList' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
              </Link>
            </li>

            <li>
              <Link to='/addFeedback' className='text-dark'>
                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
              </Link>
            </li>
            <li className="mt-5">
              <Link to='/' className='text-dark'>
                <FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={signOut}>Sign out</span>
              </Link>
            </li>
          </>
        }
      </ul>
    </div>
  );
};

export default Sidebar;