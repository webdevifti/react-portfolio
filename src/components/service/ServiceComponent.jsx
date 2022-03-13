import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const ServiceComponent = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Design</h3>  
          </div>  
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design From skecth</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Latest frontend technology version </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>External/Internal content delivery network</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Your choose/design my hard work</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Excellent communication while project running</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>PSD/XD/FIGMA fils to HTML</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>  
          </div>  
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Most popular backend technology</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Just give a frontend template</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>If don't have template, i am here to make it</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Top security level coding</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Wordpress Development</h3>  
          </div>  
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Latest wordpress version</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mainly focus on blog development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolio/Landing page</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Most popular plugin/theme builder i will use for you</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ServiceComponent