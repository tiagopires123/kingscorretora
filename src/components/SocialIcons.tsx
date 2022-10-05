import facebookIcon from '../assets/images/facebook-icon.svg'
import instagramIcon from '../assets/images/instagram-icon.svg'
import linkedinIcon from '../assets/images/linkedin-icon.svg'

import './SocialIcons.css'

function SocialIcons() {
  return (
    <div className='social-icons'>
      <a href=""><img src={facebookIcon} alt='facebook' /></a>
      <a href=""><img src={instagramIcon} alt='facebook' /></a>
      <a href=""><img src={linkedinIcon} alt='facebook' /></a>
    </div>
  )
}
  
export default SocialIcons