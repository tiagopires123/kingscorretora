import phoneIcon from '../assets/images/phone-icon.svg'
import mailIcon from '../assets/images/mail-icon.svg'
import logoIcon from '../assets/images/logo-kings.svg'

import SocialIcons from './SocialIcons'
import Menu from './Menu'

import './Header.css'
import { Link } from 'react-router-dom'

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
        <Link to='/'><img src={logoIcon} alt='Seguro Kings' /></Link>
        <Menu />
      </div>
    </div>
  )
}

export default Header
