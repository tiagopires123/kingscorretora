
import { Link } from 'react-router-dom'
import './Menu.css'

import { useState } from 'react'

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
          <Link to='/assistencia_24h'><li>Assistência 24h</li></Link>
          <Link to='/contato'><li>Contato</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header