import React from 'react';
import { Button } from 'react-bootstrap';
import bgImage from '../../../images/logo/unnamed.png';
const HeaderMain = () => {
    return (
        <main style={{ height: 'auto' }} className="row d-flex align-items-center mt-5 mb-5">
            <div className="col-md-5 offset-md-1 mt-0">
                <h1 style={{ color: '#3A4256' }}>Global Digital  <br /> Marketing Agency <br/> That Crafts Amazing Work</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis numquam autem. Atque, recusandae commodi itaque quas vel, est neque in quaerat quia inventore assumenda!
                </p>
                <Button className="btn btn-danger">Booking</Button>
            </div>
            <div className="col-md-6 mt-0">
                <img src={bgImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;