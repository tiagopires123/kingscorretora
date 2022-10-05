import phoneIcon from '../assets/images/phone-icon.svg'
import mailIcon from '../assets/images/mail-icon.svg'
import logoIcon from '../assets/images/logo-kings.svg'

import SocialIcons from './SocialIcons'
import Menu from './Menu'

import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='speechbar'>
        <div className='contact'>
          <a href=""><img src={phoneIcon} alt='telefone' />19 36489127</a>
          <a href=""><img src={mailIcon} alt='telefone' />contato@seguroskings.com</a>
        </div>
        <SocialIcons />
      </div>
      <div className='logo-menu'>
        <a href=""><img src={logoIcon} alt='Seguro Kings' /></a>
        <Menu />
      </div>
    </div>
  )
}

export default Header
