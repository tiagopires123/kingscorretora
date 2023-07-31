
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
      <div>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/para_voce'><li>Para você</li></Link>
            <Link to='/para_empresa'><li>Para sua empresa</li></Link>
            <Link to='/sobre_nos'><li>Sobre nós</li></Link>
            <Link to='/assistencia_24h'><li>Assistência 24h</li></Link>
            <a target='_blank' href='../public/Politica-de-Privacidade.pdf'><li>Política de privacidade</li></a>
          </ul>
      </div>
    </nav>
  )
}

export default Header