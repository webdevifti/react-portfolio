import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
const FooterComponent = () => {
  return (
    <footer>
        <a href="" className='footer__logo'>webdevifti</a>

        <ul className='permalinks'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href=""><BsLinkedin/></a>
            <a href=""><BsGithub/></a>
            <a href=""><BsFacebook/></a>
            <a href=""><BsTwitter/></a>
            <a href=""><BsYoutube/></a>
        </div>
        <div className="footer__copyright">
            <small>&copy; webdevifti 2022 | All rightreserve</small>    
        </div>
    </footer>
  )
}

export default FooterComponent