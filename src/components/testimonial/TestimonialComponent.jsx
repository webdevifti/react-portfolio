import React, { useEffect, useState } from 'react'
import './testimonial.css'
// import {TestimonialData} from '../../data'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialComponent = () => {
  const [testimonial, fetchTestimonials] = useState([]);
  
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/testimonials';
    const getData = async () => {
      try{
        const res = await fetch(url);
        const json = await res.json();
        fetchTestimonials(json);
        console.log(json);
      }catch(error){
        console.log('Error',error)
      }
    }
    getData();
  },[]);
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
          testimonial.map((item,index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className="client__avatar">
                    {/* <img src={item.clientAvatar} alt="" /> */}
                </div>
                <h5 className='client__name'>{item.name}</h5>
                <small className='client__review'>{item.testimonial}</small>
              </SwiperSlide>

            );
          })
        }
      </Swiper>  
    </section>
  )
}

export default TestimonialComponent