import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MainServices.css';
import marketing from '../../../images/digital-marketing.png';
import web from '../../../images/web-design.png';
import branding from '../../../images/branding.png';
import Category from './Category';


const categories = [
  {
    img: marketing,
    title:'DIGITAL MARKETING',
    description:'The Orion that recognize the talent and effort of the best web designers, developers and agencies in the world.'
  },
  {
    img: web,
    title:'WEB DESIGN',
    description:'The Orion that recognize the talent and effort of the best web designers, developers and agencies in the world.'
  },
  {
    img: branding,
    title:'BRANDING',
    description:'The Orion that recognize the talent and effort of the best web designers, developers and agencies in the world.'
  }
];

const MainServices = () => {
  return (
    <section className='main-service' id='portfolio'>
      <h3 className='text-center mb-5' style={{ fontSize: '34px', fontWeight: '600' }}>
        <span className='text-white' style={{ color: 'black', fontSize: '20px', fontFamily: 'Oswald' }}>EXPERT OUR </span><br />
        <span style={{ color: '#7AB259', fontFamily: 'Oswald' }}>WHAT WE CAN DO</span>
      </h3>
      <div className="row">
        {
          categories.map(category=><Category category={category}></Category>)
        }
       
      </div>

    </section>
  );
};

export default MainServices;