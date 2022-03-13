import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>  
      <a href="#cta" className='btn btn-primary'>Hire Me</a>  
    </div>
  )
}

export default CTA