import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/sobre-nos-banner.jpg'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/diversos.png'

import Benefits from '../../components/Benefits'

import './../Home.css'

function SeguroDiverso() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGUROS DIVERSOS</h1>
            <p>Não encontrou o seguro que procura?</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>SEGURO DIVERSOS </h2>
              <p>Os seguro não se encaixam na sua necessidade? Converse diretamente com um de nossos corretores através do botão de whatsapp, explicando a sua necessidade em seguro, que buscaremos uma solução.</p>
            </div>
          </div>
        </section>
        <Benefits />
      </div>
      <Footer />
    </div>
  )
}

export default SeguroDiverso