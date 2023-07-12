import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/images/banner-home.jpg'
import family from '../assets/images/family.jpg'
import manPhone from '../assets/images/man-phone.jpg'
import carBroken from '../assets/images/broken-car.jpg'
import femaleCar from '../assets/images/female-car.jpg'

import calculator from '../assets/images/calculator.svg'
import plus from '../assets/images/plus.svg'
import crown from '../assets/images/crown.svg'
import card from '../assets/images/card.svg'
import chat from '../assets/images/chat.svg'
import like from '../assets/images/like.svg'
import speed from '../assets/images/speed.svg'
import headset from '../assets/images/headset.svg'
import BannerButtons from '../components/BannerButtons'

import { Link } from 'react-router-dom'

import './Home.css'

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

      <div className='main-container'>
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
              <div>
                <img src={carBroken} alt='homem ligando para seguro com o carro quebrado' />
                <span>Assistência 24h</span>
              </div>
          </div>
        </section>

        <section className="article">
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

        <section className='benefits' id='benefits'>
          <h2>Principais Vantagens</h2>
          <div className='cards'>
            <div className='card'>
              <img src={calculator} alt='ícone calculadora' />
              <span>Melhores condições</span>
              <p>Aqui você encontra seguros com as melhores condições e preços do mercado.</p>
            </div>
            <div className='card'>
              <img src={plus} alt='ícone mais' />
              <span>Mais opções</span>
              <p>Conte com o maior portfólio de seguros do mercado. O seu seguro do seu jeito!</p>
            </div>
            <div className='card'>
              <img src={crown} alt='ícone coroa' />
              <span>Do seu jeito</span>
              <p>Personalize as suas coberturas do seu seguro e pague só pelo que escolher! </p>
            </div>
            <div className='card'>
              <img src={card} alt='ícone cartão de crédito' />
              <span>Viabilidade Pagamento</span>
              <p>Personalize as suas coberturas do seu seguro e pague só pelo que escolher! </p>
            </div>

            <div className='card'>
              <img src={chat} alt='ícone chat' />
              <span>Atendimendo Personalizado</span>
              <p>Imprevistos acontecem. Conte com atendimento personalizado de nossos especialistas</p>
            </div>
            <div className='card'>
              <img src={like} alt='ícone like' />
              <span>Credibilidade</span>
              <p>Conte com toda a credibilidade da KING’S e das maiores seguradoras do Brasil.</p>
            </div>
            <div className='card'>
              <img src={speed} alt='ícone velocímetro' />
              <span>Velocidade</span>
              <p>Com nosso atendimento rápido, você conta com uma equipe de especialistas e não fica na mão.</p>
            </div>
            <div className='card'>
              <img src={headset} alt='ícone headset' />
              <span>Multicanal</span>
              <p>Estamos sempre prontos para te atender e ajudar, sempre que você precisar. </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
