import React from 'react'
import './portfolio.css'
import {PortfolioData} from '../../data'


const PortfolioComponent = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          PortfolioData.map((item,index) =>{

            return(
  
              <article className='portfolio__item' key={index}>
                <div className="portfolio__item-image">
                  <img src={item.image} alt="" />  
                </div>  
                <small className='text-light'>{item.category}</small>
                <h3>{item.title}</h3>
                <div className='portfolio__item-cta'>
                    <a href="/portfolio/abs" className='btn'>Read Detail</a>
                <a href={item.demoLink} className='btn btn-primary' target="_blank">View Demo</a></div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default PortfolioComponent