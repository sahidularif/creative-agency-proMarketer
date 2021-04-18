import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './TestimonialCarousel.css';
import carousel_1 from '../../../images/logo/digital-marketing-banner-12x8-revised-01.png';
import carousel_2 from '../../../images/logo/dm-trends-2020-1.png';
import carousel_3 from '../../../images/logo/outsourcing-your-digital-marketing.jpg';
import carousel_4 from '../../../images/logo/dm-trends-2020-1.png';
import carousel_5 from '../../../images/logo/digital-marketing-banner-12x8-revised-01.png';

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
        <section className='carousel-section mt-5' id='portfolio'>
            <h3 className='text-center' style={{ fontSize: '34px', fontWeight: '600', marginTop: '70px' }}>
                <span className='text-white'>Here are some of </span>
                <span style={{ color: '#7AB259' }}>our projects</span>
            </h3>
            <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </section>
    );
};

export default TestimonialCarousel;