import React,{useRef} from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'
const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6sb9pvn', 'template_auuxzzq', form.current, '3v1ZpSbBIvEnm7Oa3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>webdevifti@gmail.com</h5>
            <a href="mailto:webdevifti@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>beifti</h5>
            <a target="_blank" href="https://m.me/beifti">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801902222047</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=+8801902222047">Send a message</a>
          </article>
        </div>  
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" cols="20" rows="5" placeholder='Your Message' required></textarea> 
            <button type='submit' className='btn btn-primary'>Send Message</button> 
          </form>  
      </div>  
    </section>
  )
}

export default ContactComponent