import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/images/sobre-nos-banner.jpg'
import img1 from '../assets/images/blonde-female-executive-posing-with-smile-and-arms-crossed-during-brainstorm-with-managers-indoor-portrait-of-european-student-spending-time-in-hall-with-asian-and-african-friends.jpg'
import img2 from '../assets/images/conceito-de-visao_41365.jpg'
import img3 from '../assets/images/business-hands-joined-together-teamwork.jpg'


import BannerButtons from '../components/BannerButtons'

import './Home.css'
import './SobreNos.css'


function SobreNos() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SOBRE NÓS</h1>
            <p>Trabalhamos com as melhores e mais tecnológicas seguradoras do mercado!</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Por que fazer meu seguro com a KING’S ?</h2>
              <p>Fundada em 2018 a KING’S é uma corretora de seguros diferenciada, nosso foco, é você cliente, atendemos todas as suas necessidades em seguros.</p>
              <p>Uma corretora de novas ideias e inovações, nascida de uma paixão e transformada em um negócio!</p>
              <p>Trabalhamos com as melhores e mais tecnológicas seguradoras do mercado!</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Nossa Missão</h2>
              <p>Oferecer um serviço de excelência, tecnológico e avançado garantindo assim a satisfação, tranquilidade, segurança e bem estar de se ter um seguro!</p>
              <h2 className='vision'>Sempre com a Visão</h2>
              <p>Oferecer um serviço de excelência, tecnológico e avançado garantindo assim a satisfação, tranquilidade, segurança e bem estar de se ter um seguro!</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box last'>
            <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Princípios e Valores</h2>
              <ul>
                <li>Satisfação e Compromisso com o Cliente;</li>
                <li>Agir conforme os melhores princípios éticos do mercado;</li>
                <li>Melhoria Contínua;</li>
                <li>Motivação;</li>
                <li>Valorização e Respeito às Pessoas e ao Meio Ambiente;</li>
                <li>Busca da felicidade.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className='benefits'>
          <h2>Nossos Especialistas</h2>
      </section>
      <Footer />
    </div>
  )
}

export default SobreNos