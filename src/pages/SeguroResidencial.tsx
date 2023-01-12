import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/images/banner-voce.jpg'
import BannerButtons from '../components/BannerButtons'



import './Home.css'

function SeguroResidencial() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO RESIDENCIAL</h1>
            <p>O seguro residencial tem como objetivo garantir ao segurado a indenização ou reembolso dos prejuízos sofridos e despesas incorridas, devidamente comprovados, decorrentes dos riscos cobertos e relativos ao bem segurado.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <h2>CONHECENDO MAIS </h2>
          <p> Este seguro é destinado a residências individuais, casas e apartamentos, habituais ou de veraneios, amparando prédios e conteúdos existentes no local indicado na apólice, e podem ser abrangidos os imóveis desocupados e os imóveis em construção, reconstrução ou reforma.</p>
          <p>Entre as coberturas oferecidas, destacamos aquelas que podem ser consideradas as mais usuais de contratação e que estão contidas em praticamente qualquer produto disponível no mercado:</p>
          
          <h3>COBERTURA BÁSICA</h3>
          <p>A sua maioria é oferecida englobando os eventos de incêndio, queda de raio e explosão de qualquer natureza;</p>

          <h3>COBERTURAS ADICIONAIS</h3>
          <p>São várias e dizem respeito às necessidades do segurado. As principais e contidas em quase todos os produtos são:</p>
            <ul>
              <li>acidentes pessoais de empregados ou do próprio segurado;</li>
              <li>alagamento e inundação;</li>
              <li>danos elétricos;</li>
              <li>desmoronamento;</li>
              <li>equipamentos eletrônicos/computação;</li>
              <li>impacto de veículos;</li>
              <li>perda/pagamento de aluguel;</li>
              <li>quebra de vidros;</li>
              <li>queda de aeronaves;</li>
              <li>queimadas em zonas rurais;</li>
              <li>responsabilidade civil familiar;</li>
              <li>roubo e furto qualificado de bens;</li>
              <li>tumultos/greve/lockout;</li>
              <li>vendaval, furacão, ciclone, tornado e granizo ou vento forte;</li>
            </ul>


          <h3>ASSITÊNCIA 24h</h3>
          <p>Além das coberturas básicas e adicionais, os seguros residenciais oferecem, ainda, serviços de assistência domiciliar, também chamados de assistência 24h, que podem ser utilizados em decorrência da efetivação de algum risco previsto (sinistro) no contrato de seguro ou situações emergenciais. Entre esses serviços, destacamos os mais comuns:</p>
          <ul>
           <li>encanador (ou bombeiro hidráulico);</li>
           <li>chaveiro;</li>
           <li>eletricista;</li>
           <li>guarda de animais domésticos;</li>
           <li>limpeza de calhas;</li>
           <li>limpeza de caixa d' água</li>
           <li>desentupimento;</li>
           <li>assistências linhas brancas</li>
          </ul>
          <p>Dentre outras assistências de acordo com o seguro contratado e o pacote de assistência escolhido.</p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroResidencial