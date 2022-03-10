import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const AboutComponent = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container container__about">
        <div className="about__me">
          <img src={Me} alt="" className='about__me-image' />  
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about_icon' />
                <h5>Clients</h5>
                <small>200+ Happy Client</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about_icon' />
                <h5>Project</h5>
                <small>2100+ Done</small>
              </article>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus provident, consectetur alias laudantium ipsam totam sunt esse, ut rem corrupti at similique? Commodi doloremque non, quod enim inventore a laborum.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>  
      </div>  
    </section>
  )
}

export default AboutComponent