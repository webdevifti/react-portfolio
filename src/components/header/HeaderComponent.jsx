import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
const HeaderComponent = () => {
  return (
    <header>
      <div className='bg'>
      <div className="container header__container">
        <div className='header_info'>
          <h5>Hello I'm</h5>
          <h1 className='my_name'>Eftekhar Alam</h1>
          <h5 className="text-designation">Web Designer | FullStack Developer | Wordpress Developer</h5>
        </div>
        <HeaderSocial />
        <CTA />
      </div>
      </div>
    </header>
  )
}

export default HeaderComponent