import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './TestimonialCarousel.css';
import carousel_1 from '../../../images/logo/project1.jpg';
import carousel_2 from '../../../images/logo/project2.jpg';
import carousel_3 from '../../../images/logo/project3.jpg';
import carousel_4 from '../../../images/logo/project4.png';
import carousel_5 from '../../../images/logo/project5.jpg';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className='item'>
      <img src={carousel_1} alt="" className='carousel-img' />
    </div>,
    <div className='item'>
      <img src={carousel_2} alt="" className='carousel-img' />
    </div>,
    <div className='item'>
      <img src={carousel_3} alt="" className='carousel-img' />
    </div>,
    <div className='item'>
      <img src={carousel_4} alt="" className='carousel-img' />
    </div>,
    <div className='item'>
      <img src={carousel_5} alt="" className='carousel-img' />
    </div>,
  ];

const TestimonialCarousel = () => {
    return (
        <section className='carousel-section h-auto mb-0' id='portfolio'>
            <h3 className='text-center mt-3' style={{ fontSize: '34px', fontWeight: '600' }}>               
                <span style={{ color: 'white' }}>Our Running Projects</span>
            </h3>
            <AliceCarousel className=' mb-0' mouseTracking items={items} responsive={responsive} />
        </section>
    );
};

export default TestimonialCarousel;