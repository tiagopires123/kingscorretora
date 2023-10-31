
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
            <a target='_blank' href='../Assistencia_24h.pdf'><li>Assistência 24h</li></a>
            <a target='_blank' href='../Politica-de-Privacidade.pdf'><li>Política de privacidade</li></a>
          </ul>
      </div>
    </nav>
  )
}

export default Header