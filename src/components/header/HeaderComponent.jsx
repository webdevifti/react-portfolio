import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const HeaderComponent = () => {
  return (
    <header>
      <div className='bg'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eftekhar Alam</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <HeaderSocial />
        <CTA />
        {/* <div className="me">
          <img src={Me} alt="My Image" />
        </div> */}
        <a href="#about" className='scroll__down'>Scroll Down</a>
      </div>
      </div>
    </header>
  )
}

export default HeaderComponent