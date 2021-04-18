import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './UserBookingList.css';

const UserBookings = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderCollection, setOrderCollection] = useState([]);

  useEffect(() => {
    fetch(
      'https://cryptic-escarpment-88718.herokuapp.com/orderCollection?email=' +
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

  let serialNo = 1;
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
          <div className='rounded bg-white'>
            <h4 className="text-center text-dark">You've placed {orderCollection.length}  Order</h4>
            <div className='row'>

              <div className="col-md-11 border m-0 m-auto justify-content-center">
                
                <div className='rounded bg-white '>
                  <div className='table-responsive'>
                    <table className='table table-borderless table-hover bg-white rounded my-4'>
                      <thead className='thead-light'>
                        <tr>
                          <th className='text-secondary text-left' scope='col'>
                            #
              </th>
                          <th className='text-secondary' scope='col'>
                            Name
              </th>
                          <th className='text-secondary' scope='col'>
                            Email ID
              </th>
                          <th className='text-secondary' scope='col'>
                            Service
              </th>
                          <th className='text-secondary' scope='col'>
                            Project Details
              </th>
                          <th className='text-secondary' scope='col'>
                            Status
              </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderCollection.map((service) => (
                          <tr key={service._id}>
                            <td>{serialNo++}</td>
                            <td>{service.name}</td>
                            <td>{service.email}</td>
                            <td>{service.title}</td>
                            <td>{service.description}</td>
                            <td className='text-center'>
                              <strong
                                className={
                                  service.status == 'Pending'
                                    ? 'btn btn-danger'
                                    : service.status == 'Done'
                                      ? 'btn btn-success'
                                      : service.status == 'On going'
                                        ? 'btn btn-warning'
                                        : 'btn btn-dark'
                                }
                              >{service.status}</strong>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBookings;