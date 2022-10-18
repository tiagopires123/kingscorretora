import facebookIcon from '../assets/images/facebook-icon.svg'
import instagramIcon from '../assets/images/instagram-icon.svg'
import linkedinIcon from '../assets/images/linkedin-icon.svg'

import './SocialIcons.css'

function SocialIcons() {
  return (
    <div className='social-icons'>
      <a href="https://www.facebook.com/SegurosKings/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt='facebook' /></a>
      <a href="https://www.instagram.com/seguroskings/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt='facebook' /></a>
      <a href="https://br.linkedin.com/company/seguroskings" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt='facebook' /></a>
    </div>
  )
}
  
export default SocialIcons