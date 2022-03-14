import React from 'react'
import './cta.css'

const CtaComponent = () => {
  return (
    <section id='cta'>
        <h5>Hire Me Options</h5>
        <h2>Hire Me</h2>

        <div className="container call_to_action__container">
            <div className='call_to_action_left_text'>
                <h4>I am available on popular market places. Have you any project lets disscus on </h4>
            </div>
            <div className='call_to_action_right_content'>
                <a href="https://www.fiverr.com/webdevifti?up_rollout=true" target="_blank" className='btn btn-primary fiverr-btn'>Fiverr</a>
                <a href="https://www.upwork.com/freelancers/~01af2372e71ed5474b" target="_blank" className='btn btn-primary upwork-btn'>Upwork</a>
            </div>
        </div>
    </section>
  )
}

export default CtaComponent