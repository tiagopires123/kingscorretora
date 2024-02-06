
import { Link } from 'react-router-dom'
import './Menu.css'

import { useState } from 'react'
import SocialIcons from './SocialIcons'
import logoWhite from '../assets/images/logo-kings-white.svg'

function Header() {
  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }
  return (
    <nav>
      <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
        <div className='hamburguer hamburguerIcon'></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <div className='list'>
          <ul className='listItems'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/para_voce'><li>Para você</li></Link>
          <Link to='/para_empresa'><li>Para sua empresa</li></Link>
          <Link to='/sobre_nos'><li>Sobre nós</li></Link>
          <a target='_blank' href='../Assistencia_24h.pdf'><li>Assistência 24h</li></a>
          {/* <Link to='/contato'><li>Certificados</li></Link> */}
          </ul>
        </div>
        <div className='logo-menu mobile'>
          <Link to='/'><img src={logoWhite} alt='Seguro Kings' /></Link>
          <SocialIcons />
        </div>
      </div>
    </nav>
  )
}

export default Header