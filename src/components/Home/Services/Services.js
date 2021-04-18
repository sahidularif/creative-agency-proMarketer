import React, { useEffect, useState } from 'react';
import Servicedetails from '../ServiceDetails/Servicedetails';
import { Button } from 'react-bootstrap';
import './Services.css';

const Services = () => {

  const [serviceInfo, setServiceInfo] = useState([]);

 // Load data form server api
  useEffect(() => {
    fetch('https://cryptic-escarpment-88718.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => {
        setServiceInfo(data);        
      });
  }, []);
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#3A4256',marginTop:'5%' }}>OUR SERVICES</h5>
                <h6 className="mt-3">Next-level Digital Marketing Strategies That Works</h6>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {
                        serviceInfo.map(service => <Servicedetails service={service}></Servicedetails>)
                    }

                </div>
            </div>
            <div className="text-center">
            <Button>Explore More</Button>
            </div>
        </section>
    );
};

export default Services;