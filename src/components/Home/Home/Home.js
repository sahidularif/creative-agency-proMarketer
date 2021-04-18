import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import Services from '../Services/Services';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';


const Home = () => {
    return (
       <>
        <Header/>
        <TestimonialCarousel/>
        <Services/>      
        <Testimonials/>        
        <Contact/>
        <Footer/>
       </>
    );
};

export default Home;