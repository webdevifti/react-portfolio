import React,{useState, useEffect} from 'react'
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
    // console.log(params);
    const [portfolos, fetchPortfolioes] = useState({});
    // const [images, fetchPortfolioesImages] = useState([]);
  
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/portfolio/'+params.slug;
    const getData = async () => {
      try{
        const res = await fetch(url);
        const json = await res.json();
        fetchPortfolioes(json.data.portfolio);
        // fetchPortfolioesImages(json.data.images);
      }catch(error){
        console.log('Error',error)
      }
    }
    getData();
  },[]);
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
                                <img src={item.media_file} alt="" />
                            </div>
                        </SwiperSlide>

                        );
                    })
                    }
                </Swiper>
            </div>
            <div className='portfolio_right_content'>
                <h3>Description</h3>
                   {portfolos.description}
                <div className='portfolio_meta_data'>
                    <p><strong>Project Duration: </strong> {portfolos.duration}</p>
                    <p><strong>Client Name: </strong> {portfolos.client_name} </p>
                    <p> <strong>Project URL: </strong> <Link to="/">{portfolos.hosted_url}</Link></p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa rem praesentium recusandae dignissimos quisquam assumenda nemo, necessitatibus corrupti ad.</p>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
  )
}

export default SinglePortfolio