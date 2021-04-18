import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import UserBookingList from './UserBookingList';
import './UserBookingList.css';

const UserBookings = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderCollection, setOrderCollection] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:5500/orderCollection?email=' +
      loggedInUser.email,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderCollection(data);
      });
  }, [loggedInUser.email]);

  return (
    <section>
      <div className="row d-block">
        <div className="col-md-12">
          <Topbar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 border">
          <strong>Booking List</strong>
          <div className='rounded bg-white my-4 mx-4 p-4'>
            <h4 className="text-center text-dark">You've placed {orderCollection.length}  Order</h4>
            <div className='row'>

              {orderCollection.map((order) => (
                <UserBookingList key={order._id} order={order} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBookings;