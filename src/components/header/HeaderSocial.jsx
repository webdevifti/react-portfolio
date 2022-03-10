import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
import ReactTooltip from 'react-tooltip';
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a data-tip data-for="linkedintip" href="https://www.linkedin.com/in/webdevifti/" target="_blank"><BsLinkedin /></a>
        <a data-tip data-for="githubtip"  href="https://github.com/webdevifti" target="_blank"><BsGithub /></a>
        <a data-tip data-for="facebooktip" href="https://www.facebook.com/webdevifti/" target="_blank"><BsFacebook /></a>
        <a data-tip data-for="twittertip" href="https://www.twitter.com/webdevifti/" target="_blank"><BsTwitter /></a>
        <a data-tip data-for="youtubetip" href="https://www.youtube.com/channel/UCOh8jKDUrKKxTK81T6TXC9Q" target="_blank"><BsYoutube /></a>

        <ReactTooltip id="linkedintip" place="right" effect="solid">
        Let's Connect with Linkedin
      </ReactTooltip>
        <ReactTooltip id="githubtip" place="right" effect="solid">
        Follow Me on Github
      </ReactTooltip>
        <ReactTooltip id="facebooktip" place="right" effect="solid">
        Follow Me On Facebook
      </ReactTooltip>
        <ReactTooltip id="twittertip" place="right" effect="solid">
        Follow Me On Twitter
      </ReactTooltip>
        <ReactTooltip id="youtubetip" place="right" effect="solid">
        Subscribe My Channel
      </ReactTooltip>
    </div>
  )
}

export default HeaderSocial