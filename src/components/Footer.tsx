import logoWhite from '../assets/images/logo-kings-white.svg'

import Menu from './Menu'
import SocialIcons from './SocialIcons'

import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <img src={logoWhite} alt='Seguro Kings' className="logo-footer" />
          <div className='address'>
            <span>King’ Corretora de Seguros</span>
            <span>CNPJ: 00.000.000/0001-85</span>
            <span>Rua Frederico Polo, 521 - Vila Massucheto</span>
            <span>CEP: 13565-580, Americana - SP</span>
          </div>
          <SocialIcons />
        </div>
        <Menu />
      </div>
    </footer>
  )
}

export default Footer