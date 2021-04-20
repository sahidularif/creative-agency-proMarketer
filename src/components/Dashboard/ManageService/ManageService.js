import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import stripe from '../../../images/logo/stripe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// ==============================================================================

const ManageService = () => {

    const [serviceList, setServiceList] = useState([]);
    const [selectService, setSelectService] = useState({});

    useEffect(() => {
        fetch('https://cryptic-escarpment-88718.herokuapp.com/orderList')
            .then((res) => res.json())
            .then((data) => {
                setServiceList(data);
            });
    }, [serviceList]);

    // const updateStatus = (status) => {
    //     const data = { _id: selectService._id, status };
    //     console.log(selectService, 'status', status);

    //     fetch(
    //         `https://cryptic-escarpment-88718.herokuapp.com/updateOrderStatus/${data._id}`,
    //         {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         }
    //     )
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .then((result) => {
    //             if (result) {
    //                 console.log(result);
    //             }
    //         });
    // };


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
                    <strong>Order List</strong>
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
                                            Pay With
              </th>
                                        <th className='text-secondary' scope='col'>
                                            Status
              </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {serviceList.map((service) => (
                                        <tr key={service._id}>
                                            <td>{serialNo++}</td>
                                            <td>{service.name}</td>
                                            <td>{service.email}</td>
                                            <td>{service.title}</td>
                                            <td>
                                                <img src={stripe} className=" img-fluid" width="40px" alt="" />
                                            </td>

                                            <td className='text-center'>
                                            <FontAwesomeIcon className="icon active-icon" icon={faTrash} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageService;