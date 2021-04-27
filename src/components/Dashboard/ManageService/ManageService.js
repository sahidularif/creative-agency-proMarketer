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
        fetch('https://cryptic-escarpment-88718.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => {
                setServiceList(data);
            });
    }, [serviceList]);

    const deleteItem = (_id) => {

        fetch(
            `https://cryptic-escarpment-88718.herokuapp.com/deleteService/${_id}`,
            {
                method: 'DELETE'
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then((result) => {
                if (result) {
                    console.log(result);
                }
            });
    };


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
                            <table className='table table-border table-hover bg-white rounded my-4'>
                                <thead className='thead-light text-center'>
                                    <tr>
                                        <th className='text-secondary' scope='col'>
                                            #
                                        </th>
                                        <th className='text-secondary' scope='col'>
                                            Title
                                        </th>
                                        <th className='text-secondary' scope='col'>
                                            Description
                                        </th>
                                        <th className='text-secondary' scope='col'>
                                            Price
                                        </th>

                                        <th className='text-secondary' scope='col'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {serviceList.map((service) => (
                                        <tr key={service._id}>
                                            <td>{serialNo++}</td>
                                            <td>{service.title}</td>
                                            <td>{service.description}</td>
                                            <td>{service.price}</td>
                                            <td className='text-center text-danger'>
                                                <FontAwesomeIcon className="icon active-icon" onClick={() => { deleteItem(service._id) }} icon={faTrash} />
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