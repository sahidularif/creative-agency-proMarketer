import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import Services from '../Services/Services';
import MainServices from '../MainServices/MainServices';


const Home = () => {
    return (
       <>
        <Header/>
        <MainServices/>
        <Services/>      
        <Testimonials/>        
        <Contact/>
        <Footer/>
       </>
    );
};

export default Home;