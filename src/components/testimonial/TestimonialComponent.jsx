import React from 'react'
import './testimonial.css'
import {TestimonialData} from '../../data'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialComponent = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination,]} 
       
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          TestimonialData.map((item,index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className="client__avatar">
                    <img src={item.clientAvatar} alt="" />
                </div>
                <h5 className='client__name'>{item.clientName}</h5>
                <small className='client__review'>{item.review}</small>
              </SwiperSlide>

            );
          })
        }
      </Swiper>  
    </section>
  )
}

export default TestimonialComponent