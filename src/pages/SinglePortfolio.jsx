import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import FooterComponent from '../components/footer/FooterComponent'
import {PortfolioSlide} from '../data'
import './single.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const SinglePortfolio = () => {
    let params = useParams();
  return (
    <div>
        <div className='portfolio__header'>
            <div className='container'>
                <div className='portfolio__heading'>
                    <h1>{params.slug}</h1>
                </div>
            </div>
        </div>
        <div className='container'>
            <ul className='bredcrum'>
                <li><Link to="/">Home</Link> </li><span><AiOutlineRight /></span>
                <li>{params.slug}</li>
            </ul>
        </div>

        <div className='container portfolio_content__container'>
           <div className='portfolio_left_content'>
                <Swiper className='swipper_slider'
                    modules={[Pagination,]} 
                
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {
                    PortfolioSlide.map((item,index) => {
                        return (
                        <SwiperSlide className='image-slider' key={index}>
                            <div className="slide">
                                <img src={item.slide} alt="" />
                            </div>
                        </SwiperSlide>

                        );
                    })
                    }
                </Swiper>
            </div>
            <div className='portfolio_right_content'>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo aut commodi voluptatum distinctio odit asperiores inventore culpa quasi accusantium ut dicta facere tempore doloribus, nemo in possimus, earum saepe minima autem, laudantium optio incidunt magnam? Laborum nemo praesentium ipsa veritatis, rem sit iste veniam. Suscipit labore eligendi reprehenderit explicabo odio rerum libero. Ad, incidunt dicta rerum dolorum, repellendus sapiente architecto doloribus, at inventore rem voluptatibus facilis eius. Iusto possimus dolore expedita corrupti nulla recusandae tenetur quidem fugiat reprehenderit, cumque laudantium provident debitis quos quis quia non in velit quam hic consectetur neque quasi rerum placeat tempore! Ducimus, accusantium tempore.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, in rerum, error non temporibus officia ea animi autem distinctio eius neque cupiditate. Consequatur sunt aut excepturi quo eligendi aliquam iusto sequi libero, ipsum impedit id cupiditate laboriosam ex porro dignissimos maxime, est totam. Consectetur inventore saepe nihil! Odio, ipsum sed!</p>

                <div className='portfolio_meta_data'>
                    <p><strong>Project Duration: </strong> 10 Days</p>
                    <p><strong>Client Name: </strong> Ariyan Ataur </p>
                    <p> <strong>Project URL: </strong> <Link to="/">https://test.com</Link></p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa rem praesentium recusandae dignissimos quisquam assumenda nemo, necessitatibus corrupti ad.</p>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
  )
}

export default SinglePortfolio