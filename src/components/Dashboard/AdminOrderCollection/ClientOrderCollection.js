import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const ClientOrderCollection = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderCollection, setOrderCollection] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-escarpment-88718.herokuapp.com/orderCollection')
          .then((res) => res.json())
          .then((data) => {
            setOrderCollection(data);
          });
      }, []);

    return (
        <div>
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
                        <strong>Client Order List</strong>
                        <div className='rounded bg-white my-4 mx-4 p-4'>
                      

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientOrderCollection;