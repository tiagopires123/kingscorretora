import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/trabalhadores-da-construcao-civil-fabricando-barra-de-reforco-de-aco-no-local-da-construcao_33835-1972.jpg'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/concepcao-de-construcao-de-capacete-de-imagem-em-rolamentos-em-placas-de-madeira-em-estilo-retro.jpg'
import img2 from '../../assets/images/silhueta-de-construcao.jpg'
import img3 from '../../assets/images/silhuetas-do-local-de-construcao.jpg'

import './../Home.css'

function SeguroRiscoEngenharia() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO RISCOS DE ENGENHARIA</h1>
            <p>Os Seguros de Riscos de Engenharia possuem uma cobertura, denominada internacionalmente all risks, ou seja, garante todos os riscos envolvidos, exceto os riscos definidos como excluídos nas condições gerais de cada modalidade. Tal forma é utilizada para facilitar o trabalho de análise e compreensão, pois seria muito difícil enumerar todos os riscos possíveis de serem cobertos.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>CONHECENDO MAIS </h2>
              <p>“Trata-se de um seguro de ‘reposição’ do bem, nas mesmas condições em que se encontrava imediatamente antes do sinistro.”</p>
              <p>O Ramo Riscos de Engenharia compreende uma modalidade de seguro enquadrada como: antes do funcionamento.</p>
              <p>antes do funcionamento – garantem a cobertura aos bens segurados durante as fases de construção, instalação e testes, antes de entrarem em funcionamento. São os seguros de:– Obras Civis em Construção e Instalação e Montagem – OCC/IM.</p>
              <p>Essa modalidade tem como característica comum o conceito de all risks, ou seja, estão cobertos todos os riscos que não estejam expressamente excluídos nas condições.</p>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-text'>
              <h2>Condições e Cláusulas</h2>
              <p>Condições gerais de Riscos de Engenharia – compostas por cláusulas que definem riscos cobertos e excluídos, sinistros e outros itens inerentes a carteira de Riscos de Engenharia. É obrigatório estarem anexadas em todas as apólices desse ramo;</p>
              <p>Condições especiais – definem, no contrato de seguro, todas as cláusulas referentes a Cobertura Básica da carteira de Riscos de Engenharia;</p>
              <p>Condições particulares – definem, no contrato de seguro, todas as cláusulas referentes às Coberturas Adicionais contratadas da carteira de Riscos de Engenharia; e</p>
              <p>Cláusulas particulares – condições específicas para cada segurado, indicando situações especiais de cobertura, ou consideradas como particulares que requeiram destaques, ou cuidados acima da normalidade, ou de alto grau de risco.</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box last'>
          <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Hierarquia das Cláusulas</h2>
              <p>É comum, entre empresas que possuem equipamentos arrendados, solicitar a inclusão de uma cláusula particular (cláusula beneficiária), estabelecendo que toda e qualquer indenização deverá ser paga ao proprietário do equipamento (arrendador). Essa cláusula, portanto, por ser mais específica, prevalecerá sobre a cláusula de indenização das condições gerais, a qual diz que toda indenização deverá ser paga ao segurado (arrendatário).</p>
              <p>As cláusulas particulares prevalecem sobre as condições particulares, que, por sua vez, prevalecem sobre as condições especiais, e todas, nessa ordem, sobre as condições gerais.</p>
            </div>
            
          </div>

        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroRiscoEngenharia