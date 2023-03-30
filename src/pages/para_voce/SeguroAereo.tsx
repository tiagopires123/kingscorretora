import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice16.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/vista-ar-aviao-asa-durante-decolagem-ou-aterragem.jpg'
import img2 from '../../assets/images/aviao-ao-por-do-sol.jpg'
import img3 from '../../assets/images/avioes-particulares-em-campo.jpg'
import img4 from '../../assets/images/closeup-tiro-de-uma-helice-monoplano-estacionada-moderna.jpg'
import img5 from '../../assets/images/jato-particular-de-luxo-no-terminal-do-aeroporto.jpg'

import './../Home.css'

function SeguroAereo() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO AÉREO</h1>
            <p>O Brasil, por possuir expressiva extensão territorial, não poderia deixar de escolher o meio aéreo como uma forma de alavancar a economia do país.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='Equipamentos' />
            <div className='box-text'>
              <h2>CONHECENDO MAIS</h2>
              <p>Os principais ramos que são disponibilizados aos segurados e que podem ser oferecidos são:</p>
              <p>Aditivo A – Aeronáuticos – Garantia Cascos;</p>
              <p>Aditivo B – Garantia RETA – Responsabilidade do Explorador Transportador Aéreo - Cobertura de Responsabilidade Civil de caráter obrigatório!</p>
              <p>Responsabilidade Civil – Facultativo para Aeronaves-Responsabilidade Civil a 2o Risco do Seguro RETA!</p>
              <p>Responsabilidade Civil de Hangares;</p>
              <p>Seguro de Peças, Motores e Acessórios Sobressalentes.</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>NOÇÕES GERAIS, REGULAMENTAÇÃO DO SETOR</h2>
              <p>No Brasil, a Aviação Civil é regulada pelas seguintes instituições:</p>
              <p>SAC – Secretaria de Aviação Civil;</p>
              <p>ANAC – Agência Nacional de Aviação Civil;</p>
              <p>DECEA – Departamento de Controle do Espaço Aéreo;</p>
              <p>CENIPA – Centro de Investigação e Prevenção de Acidentes Aeronáuticos.</p>
            </div>
            <img src={img2} alt='Equipamentos' />
          </div>
          
          <div className='box'>
            <img src={img3} alt='Equipamentos' />
            <div className='box-text'>
              <h2>SUBSCRIÇÃO DOS RISCOS, PESSOA FÍSICA</h2>
              <p>São pessoas que operam com universo de aeronaves bastante variado, normalmente de pequeno ou médio portes, que podem ser utilizadas da seguinte maneira:</p>
              <p>na prestação de serviços por demanda, como, por exemplo, os táxis aéreos; </p>
              <p>particular, como, por exemplo, as aeronaves de propriedade de empresas utilizadas para o transporte de seus executivos.</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>TIPOS DE AERONAVES MAIS COMUNS E IMPORTÂNCIA SEGURADA</h2>
              <p>Asas Fixas: Jatos, Turboélices, Convencionais (Motores a Pistão);</p>
              <p>Asas Rotativas: Helicópteros, Helicópteros Turbinados;</p>
              <p>A Importância Segurada é fixada:</p>
              <p>quando a aeronave for nova – a partir da nota fiscal;</p>
              <p>quando for usada – a partir da informação do segurado, em consonância com pesquisa realizada pelos seguradores/resseguradores através de publicações especializadas sobre o assunto.</p>
            </div>
            <img src={img4} alt='Equipamentos' />
          </div>

          <div className='box last'>
            <img src={img5} alt='Equipamentos' />
            <div className='box-text'>
              <h2>O SEGURO OBRIGATÓRIO, GARANTIA RETA E ADITIVO B</h2>
              <p>O seguro obrigatório das aeronaves, equivalente ao Seguro DPVAT – Danos Pessoais Causados por Veículos Automotores Terrestres (seguro obrigatório dos automóveis) chama-se RETA – Responsabilidade do Explorador e Transportador Aéreo. O Seguro RETA é também conhecido como Aditivo B nas apólices de Seguros Aeronáuticos.</p>
              <p>O seguro obrigatório de uma aeronave deve garantir – nos limites da lei – indenização por danos pessoais a tripulantes, passageiros e suas bagagens, bem como pessoas no solo. Também deve cobrir reparação por danos materiais por colisão e abalroamento a outras aeronaves e bens de terceiros no solo</p>
              <p>Para maiores informações entre em contato ou preencha o formulário acima e nós da KING'S Corretora de Seguros entramos em contato com você! </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroAereo