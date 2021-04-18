import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import wilson from '../../../images/logo/aliza.png';
import ema from '../../../images/logo/aliza.png';
import aliza from '../../../images/logo/aliza.png';
import TestimonalPost from './TestimonalPost';

const Testimonials = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    // Load data form server api
     useEffect(() => {
       fetch('https://cryptic-escarpment-88718.herokuapp.com/feedback')
         .then((res) => res.json())
         .then((data) => {
            setFeedbacks(data);        
         });
     }, []);
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Testimonials</h5>
                   
               </div>
               <div className="card-deck mt-5">
                   
                    {
                        feedbacks.map(feedback => <TestimonalPost feedback={feedback} key={feedback.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Testimonials;