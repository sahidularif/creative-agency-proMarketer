import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
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
                        <div className='rounded bg-white my-4 mx-4 p-4'>
                            {
                                !isAdmin && <h1>Click <Link to="/">Here</Link> To Order From Homepage</h1>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;