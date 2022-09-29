import logoIcon from '../assets/images/logo-kings.svg'
import facebookIcon from '../assets/images/facebook-icon.svg'
import instagramIcon from '../assets/images/instagram-icon.svg'
import linkedinIcon from '../assets/images/linkedin-icon.svg'
import phoneIcon from '../assets/images/phone-icon.svg'
import mailIcon from '../assets/images/mail-icon.svg'

import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='speechbar'>
        <div className='contact'>
          <a href=""><img src={phoneIcon} alt='telefone' />19 36489127</a>
          <a href=""><img src={mailIcon} alt='telefone' />contato@seguroskings.com</a>
        </div>
        <div className='social-icons'>
          <a href=""><img src={facebookIcon} alt='facebook' /></a>
          <a href=""><img src={instagramIcon} alt='facebook' /></a>
          <a href=""><img src={linkedinIcon} alt='facebook' /></a>
        </div>
      </div>
      <div>
        <nav>
          <a href=""><img src={logoIcon} alt='Seguro Kings' /></a>
          <div>
            <a href=''>Home</a>
            <a href=''>Para você</a>
            <a href=''>Para sua empresa</a>
            <a href=''>Assistência 24h</a>
            <a href=''>Contato</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
