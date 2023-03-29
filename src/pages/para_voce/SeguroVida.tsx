import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice7.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/familia-de-quatro-em-um-lar-amoroso.jpg'
import img2 from '../../assets/images/arranjo-criativo-do-conceito-de-familia-com-espaco-de-copia.jpg'
import img3 from '../../assets/images/familia-jovem-com-seu-filho-pequeno-em-casa.jpg'



import './../Home.css'

function SeguroVida() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO DE VIDA</h1>
            <p> O seguro de vida é um contrato para garantir o sustento e manutenção de um padrão de vida, no caso de uma fatalidade ou acidente acontecer. Esse benefício pode agraciar familiares e/ou pessoas que dependam financeiramente do contratante, além de prover ao próprio contratante em casos de acidentes e/ou doenças!</p>
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
              <p>Os planos de Seguros de Pessoas sejam eles individuais, ou em grupos são aqueles destinados a oferecer coberturas de risco (por exemplo, morte, invalidez, doenças graves) e/ou coberturas por sobrevivência.</p>
                <ul>
                  <li>O seguro de vida não é só para a morte;</li>
                  <li>Seguro de vida não precisa ser caro;</li>
                  <li>O seguro de vida da sua empresa pode não ser suficiente;</li>
                  <li>Você consegue fazer um seguro de vida mesmo se tiver problemas de saúde ou fumar, nunca omita informações;</li>
                  <li>Pessoas solteiras ou sem dependentes podem precisar de seguro de vida;</li>
                  <li>Os seguros são customizáveis e podem resguardar empreendedores, profissionais de todas as áreas, além de você e sua família, dentre vários outros motivos e benefícios que este seguro trás! </li>
                </ul>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-text'>
              <h2>COBERTURAS</h2>
              <p>Os planos podem oferecer, juntos ou separadamente, os seguintes tipos de coberturas:</p>
              <ul>
                <li>Morte (Natural ou Acidental);</li>
                <li>Invalidez Laborativa Permanente Total por Doença (ILPD);</li>
                <li>Invalidez Funcional Permanente Total por Doença (IFPD);</li>
                <li>Doenças Graves;</li>
                <li>Acidentes Pessoais;</li>
              </ul>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>


          <div className='box last'>
            <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>SUJEITOS DA OPERAÇÃO</h2>
              <p>Na contratação de um plano de Seguros de Pessoas estão envolvidas as seguintes partes:</p>
                <ul>
                  <li>segurado – pessoa física que contrata ou, no caso de contratação sob a forma coletiva, adere ao plano;</li>
                  <li>seguradora – pessoa jurídica obrigatoriamente constituída sob a forma de sociedade anônima – S/A, que assume a responsabilidade pela cobertura dos riscos especificados na apólice, mediante o recebimento do prêmio correspondente;</li>
                  <li>corretor – pessoa física ou jurídica que faz a intermediação da contratação do plano;</li>
                  <li>beneficiário – pessoa física ou jurídica livremente indicada pelo segurado, respeitadas as determinações legais e regulamentares, para receber os valores dos capitais segurados – indenizações –, na hipótese de ocorrência do sinistro;</li>
                  <li>estipulante – pessoa física ou jurídica que propõe a contratação de plano coletivo, ficando investido de poderes de representação do segurado, nos termos da legislação e regulamentação em vigor.</li>
                </ul>

              <h3>PERÍODO DE COBERTURA</h3>
              <p>O período de cobertura é aquele durante o qual o segurado ou os beneficiários, quando for o caso, farão jus aos capitais segurados contratados. O período de cobertura pode ser temporário ou vitalício.</p>
              <p>Período de cobertura temporário é aquele em que o pagamento do capital segurado somente será feito se o evento ocorrer dentro de período perfeitamente determinado no contrato.</p>
              <p> Período de cobertura vitalício é aquele em que o pagamento do capital segurado será feito quando ocorrer o evento, a qualquer tempo.</p>
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroVida