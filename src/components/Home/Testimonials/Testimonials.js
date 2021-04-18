import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/logo/aliza.png';
import ema from '../../../images/logo/aliza.png';
import aliza from '../../../images/logo/aliza.png';
import TestimonalPost from './TestimonalPost';

const Testimonials = () => {
    const blogData = [
        {
            title: 'Check at least a doctor in a year for your teeth',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'Two time brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Sinthia',
            authorImg: ema,
            date: '23 April 2019'
        },
        {
            title: 'The tooth cancer is taking a challenge',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: aliza,
            date: '23 April 2019'
        },
    ]
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Testimonials</h5>
                   
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(post => <TestimonalPost post={post} key={post.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Testimonials;