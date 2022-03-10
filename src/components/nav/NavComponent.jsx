import React from 'react'
import { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {VscTasklist} from 'react-icons/vsc'
import {FcFeedback} from 'react-icons/fc'


const NavComponent = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" title="Home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
      <a href="#about" title="About" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser /></a>
      <a href="#experience" title="Experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook /></a>
      <a href="#services" title="Service" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine /></a>
      <a href="#portfolio" title="Portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><VscTasklist /></a>
      <a href="#testimonials" title="testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active': ''}><FcFeedback /></a>
      <a href="#contact" title="Contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default NavComponent