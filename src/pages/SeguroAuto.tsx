import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/images/banner-voce.jpg'
import BannerButtons from '../components/BannerButtons'



import './Home.css'

function SeguroAuto() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO AUTO</h1>
            <p>O seguro de automóveis tem como objetivo garantir ao segurado a indenização ou reembolso dos prejuízos sofridos e despesas incorridas, devidamente comprovados, decorrentes dos riscos cobertos e relativos aos veículos segurados.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <h2>Coberturas Básicas </h2>
          <p>São aquelas coberturas relacionadas diretamente ao veículo segurado (casco) e que se destinam ao reembolso dos danos impostos ao próprio veículo segurado. Estas coberturas apresentam-se nos seguintes tipos:</p>
          <ul>
            <li>cobertura básica nº 1 (também chamada de Compreensiva, incêndio, roubo e colisão);</li>
            <li>cobertura básica nº 2 (também chamada de cobertura de Incêndio e Roubo).</li>
          </ul>
          <p>IMPORTANTE: Cada veículo somente poderá ser segurado por uma cobertura básica.</p>

          <h2>Coberturas de Terceiros - Danos Corporais, Materiais e adicionais , a Responsabilidade Civil - RCF</h2>
          <p>O Seguro de Responsabilidade Civil Facultativo – RCF garante, dentro do Limite Máximo de Responsabilidade (LMR) contratado, o reembolso ao segurado de:</p>
          <ul>
            <li>indenizações que esteja obrigado a pagar em virtude de sentença judicial transitada em julgado ou extrajudicialmente mediante acordo expresso e prévia anuência da seguradora, consequentes a danos involuntários materiais, corporais e/ou morais e estéticos, causados a terceiros, desde que sejam decorrentes dos riscos cobertos durante a vigência do seguro</li>
            <li>custas judiciais e dos honorários de advogados (desde que autorizados pela seguradora) nos processos cíveis em que o segurado seja arrolado por um acidente com terceiros (DM/DC). </li>
          </ul>
          <p>As coberturas de RCF são contratadas em conjunto com a cobertura básica!</p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroAuto