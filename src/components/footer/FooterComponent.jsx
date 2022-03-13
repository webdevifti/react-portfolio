import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
const FooterComponent = () => {
  return (
    <footer>
        <a href="" className='footer__logo'>webdevifti</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/webdevifti/"><BsLinkedin/></a>
            <a href="https://github.com/webdevifti"><BsGithub/></a>
            <a href="https://www.facebook.com/beifti/"><BsFacebook/></a>
            <a href="https://twitter.com/webdevifti"><BsTwitter/></a>
            <a href="https://www.youtube.com/channel/UCOh8jKDUrKKxTK81T6TXC9Q"><BsYoutube/></a>
        </div>
        <div className="footer__copyright">
            <small>&copy; webdevifti 2022 | All right reserve</small>    
        </div>
    </footer>
  )
}

export default FooterComponent