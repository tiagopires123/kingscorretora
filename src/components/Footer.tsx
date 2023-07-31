import logoWhite from '../assets/images/logo-kings-white.svg'
import whatsAppIcon from '../assets/images/whatsapp.png'

import MenuFooter from './MenuFooter'
import SocialIcons from './SocialIcons'
import CookieConsent from "react-cookie-consent";


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
        <MenuFooter />
      </div>
      <div id="whatsapp-widget">
          <a href="https://api.whatsapp.com/send?phone=1936489127&text=Olá!" target='_blank'>
            <img src={whatsAppIcon} alt='whatsapp icon' className="whatsapp-icon" />
          </a>
      </div>
      <CookieConsent
        enableDeclineButton 
        flipButtons
        buttonText="Aceitar cookies"
        declineButtonText="Recusar cookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={1}
      >Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.</CookieConsent>
    </footer>
  )
}

export default Footer