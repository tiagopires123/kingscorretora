import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice9.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/equipe-de-negocios-bem-sucedido-e-feliz.jpg'
import img2 from '../../assets/images/homem-com-contrato-para-seu-novo-trabalho-de-escritorio-apos-a-entrevista.jpg'
import img4 from '../../assets/images/Slice10.png'
import img3 from '../../assets/images/Slice11.png'


import './../Home.css'

function SeguroRespCivil() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Responsabilidade Civil</h1>
            <p>A responsabilidade civil do segurado é ampla, enquanto que a cobertura da apólice pode ser restrita. Cada modalidade possui coberturas e exclusões específicas que atenderão aos princípios básicos do seguro.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>CONHECENDO MAIS, REEMBOLSO </h2>
              <p>No Brasil, a maioria das apólices de outros ramos são à base de indenização.</p>
              <p>Porém, no caso da Responsabilidade Civil, elas são à base de reembolso.</p>
              <p>O princípio do reembolso determina que o segurado primeiro pague ao terceiro reclamante para depois, então, ter direito ao reembolso junto ao segurador.</p>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-last'>
              <h2>BENEFICIÁRIO</h2>
              <p>Nas apólices de RCG, apenas o próprio segurado pode ser o beneficiário, pois, por ser um seguro patrimonial, não pode ser estipulado em favor de terceiros.</p>
              <p>Os Seguros de Responsabilidade Civil são considerados patrimoniais, porque uma de suas funções é a de proteger o patrimônio do segurado.</p>
              <p>Quando um segurado causa um dano a um terceiro, a lei o obriga a reparar esse dano com os seus bens. Sendo assim, o objetivo do Seguro de RCG é proteger o patrimônio, pois, ao reembolsar o segurado no valor do sinistro, a apólice restabelece o patrimônio do segurado no mesmo patamar em que estava antes do sinistro.</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
            <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>GARANTIA DE REEMBOLSO</h2>
              <p>O Seguro de RCG pode reconhecer a obrigação da seguradora de reembolsar o segurado de duas maneiras: através de sentença judicial, transitada em julgado, e/ou através de acordos extrajudiciais celebrados com o terceiro reclamante, com a anuência da seguradora (o que é muito comum).</p>
              <p>Em qualquer um dos casos, as Condições Gerais da apólice condicionam a apuração e a liquidação do sinistro à concordância do segurador, já que é ele quem arca com o montante dos prejuízos. Assim, evita-se que o segurado faça acordos, nem sempre justos ou adequados, para se livrar rapidamente da reclamação do terceiro.</p>
            </div>
          </div>

          <div className='box last'>
            <div className='box-last'>
              <h2>ALGUMAS DAS MODALIDADES DO SEGURO RC GERAL</h2>
              <ul>
                <li>RC - Estabelecimentos Comerciais e/ou Industriais;</li>
                <li>RC - Empregador;</li>
                <li>RC - Riscos Contingentes - Veículos Terrestres Motorizados;</li>
                <li>RC - Produtos no Território Nacional;</li>
                <li>RC - Produtos no Exterior;</li>
                <li>RC - Condomínios, Proprietários e/ou Locatários de Imóveis;</li>
                <li>RC - Guarda de Veículos de Terceiros;</li>
                <li>RC - Obras Civis e/ou Serviços de Montagem e Instalação de Máquinas e/ou Equipamentos;</li>
                <li>RC - Prestação de Serviços em Locais de Terceiros;</li>
                <li>RC - Familiar;</li>
                <li>RC - Profissional (Médicos, Advogados, Prestadores de Serviços, dentre outro qualquer tipo de profissional);</li>
                <li>RC - Administradores e Diretores (D&O);</li>
                <li>RC - Riscos Ambientais;</li>
                <li>RC - Eventos e Exposições;</li>
                <li>Dentre Outros.</li>
              </ul>
            </div>
            <img src={img4} alt='jato de negócios voando sobre as nuvens' />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroRespCivil