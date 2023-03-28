import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/banner-voce.jpg'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/blonde-female-executive-posing-with-smile-and-arms-crossed-during-brainstorm-with-managers-indoor-portrait-of-european-student-spending-time-in-hall-with-asian-and-african-friends.jpg'

import './../Home.css'

function SeguroBike() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Bike</h1>
            <p>O seguro de bicicletas tem como objetivo garantir ao segurado a indenização ou reembolso dos prejuízos sofridos e despesas incorridas, devidamente comprovados, decorrentes dos riscos cobertos e relativos ao bem segurado.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>COBERTURA BÁSICA </h2>
              <p>O presente seguro garante os acidentes de causa externa (inclusive incêndio, raio, explosão de qualquer natureza, roubo e furto qualificado) da bicicleta discriminada na apólice, inclusive na residência ou em treinos, competições, lazer e durante o transporte terrestre (desde que acondicionado em Racks específicos para bicicletas,) ou aéreo, em Território Nacional.</p>
            </div>
          </div>
          
          <div className='box last'>
            <div className='box-text'>
              <h2>COBERTURA DE RESPONSABILIDADE CIVIL</h2>
              <p>Conforme discriminado na especificação da apólice e até o limite de 100% do valor da bicicleta, esta cobertura garantirá os danos corporais e materiais causados a terceiros durante a vigência da apólice e que sejam decorrentes de acidentes relacionados com a existência, uso, trânsito e operação do equipamento segurado.</p>
            </div>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroBike