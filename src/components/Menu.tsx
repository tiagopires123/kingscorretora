
import { Link } from 'react-router-dom'
import './Menu.css'

function Header() {
  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/para_voce'>Para você</Link>
        <Link to='/para_empresa'>Para sua empresa</Link>
        <Link to='/sobre_nos'>Sobre nós</Link>
        <Link to='/assistencia_24h'>Assistência 24h</Link>
        <Link to='/contato'>Contato</Link>
      </div>
    </nav>
  )
}

export default Header