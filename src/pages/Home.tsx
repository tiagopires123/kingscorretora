import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/images/banner-home.jpg'
import family from '../assets/images/family.jpg'
import manPhone from '../assets/images/man-phone.jpg'
import carBroken from '../assets/images/broken-car.jpg'
import femaleCar from '../assets/images/female-car.jpg'

import BannerButtons from '../components/BannerButtons'
import Benefits from '../components/Benefits'
import SimpleSlider from '../components/Carousel'

import { Link } from 'react-router-dom'

import './Home.css'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>AS MELHORES OPÇÕES DE SEGURO ESTÃO AQUI</h1>
            <p>O seu seguro de acordo com as suas necessidades ou de sua empresa, com garantia das melhores condições do mercado!</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container home'>
        <section className='section-container'>
          <div className='cards-middle'>
            <Link to='/para_voce'>
              <div>
                <img src={family} alt='família com bebe feliz' />
                <span>Para você e sua família</span>
              </div>
            </Link>
            <Link to='/para_empresa'>
              <div>
                <img src={manPhone} alt='homem olhando para celular na frente do computador' />
                <span>Para a sua empresa</span>
              </div>
            </Link>
            <Link to='/assistencia24h'>
              <div>
                <img src={carBroken} alt='homem ligando para seguro com o carro quebrado' />
                <span>Assistência 24h</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="article home">
          <div className='text'>
            <h2>Por que fazer meu seguro com a KING'S?</h2>
            <p>Na KING’S você conta com toda a garantia e credibilidade de uma das maiores corretoras do Brasil!</p>
            <p>Aqui você encontra seguros com as melhores condições e preços do mercado.</p>
            <p>DO SEU JEITO, Personalize as suas coberturas do seu seguro e pague só pelo que escolher!</p>
            <p>CREDIBILIDADE, Conte com toda a credibilidade da KING’S e das maiores seguradoras do Brasil.</p>
            <a href='https://api.whatsapp.com/send?phone=1936489127&text=Ol%C3%A1!'>INICIAR CONTAÇÃO</a>
          </div>
          <div>
            <img src={femaleCar} alt='mulher feliz dentro de um carro segurando a chave' />
          </div>    
        </section>

        <Benefits />
        <Carousel />
      </div>
      <Footer />
    </div>
  )
}

export default Home
