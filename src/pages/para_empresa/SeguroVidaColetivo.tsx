import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice7.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/familia-de-quatro-em-um-lar-amoroso.jpg'
import img2 from '../../assets/images/arranjo-criativo-do-conceito-de-familia-com-espaco-de-copia.jpg'
import img3 from '../../assets/images/familia-jovem-com-seu-filho-pequeno-em-casa.jpg'
import img4 from '../../assets/images/conectado-em-pessoas-de-papel-circulo.jpg'
import img5 from '../../assets/images/conceito-de-dia-mundial-do-coracao-vista-superior-com-estetoscopio.jpg'

import './../Home.css'

function SeguroVidaColetivo() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO DE VIDA COLETIVO E PJ</h1>
            <p>O  seguro de vida coletivo ou empresarial nada mais é que o seguro de vida realizado em grupo, com o objetivo de garantir proteção financeira para empregados, sócios e executivos e seus beneficiários. Os benefícios podem ser estendidos a cônjuges e filhos. Este tipo de seguro é destinado a empresas, associações e clubes ou qualquer outro objeto que apresente necessidade de um seguro de vida coletivo ou em grupo.</p>
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
              <p>O seguro Saúde surgiu devido aos custos do atendimento médico-hospitalar e a precariedade dos serviços públicos de saúde fazendo com que grande parte da população brasileira contratasse um seguro ou plano de saúde para ter mais tranquilidade. </p>
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


          <div className='box'>
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

              <h3>SOBRE O ESTIPULANTE</h3>
              <p>O Estipulante só pode ser beneficiário em um plano de Seguros de Pessoas se comprovado o legítimo interesse para que ele figure nessa condição.</p>
              <p>O estipulante será identificado como:</p>
              <ul>
              <li>estipulante-instituidor – aquele que participa, total ou parcialmente do custeio do plano; e</li>
              <li>estipulante-averbador – aquele que não participa do custeio do plano.</li>
              </ul>
              <p>Dentre outras assistências de acordo com o seguro contratado e o pacote de assistência escolhido.</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Quais são as opções de assistência privada à saúde?</h2>
              <p>Você pode escolher entre um seguro e um plano de saúde. As seguradoras especializadas em saúde oferecem atendimento médico-hospitalar com ou sem odontologia. O seguro saúde permite, obrigatoriamente, livre escolha do prestador de serviços, com opção para atendimento pela rede referenciada.</p>
              <p>O segurado que exerce a opção de livre escolha recebe reembolso das despesas até o limite previsto no contrato. Porém, quando recorre à rede referenciada, não paga nada.</p>
              <p>As operadoras de planos de saúde, por sua vez, oferecem atendimento médico-hospitalar e odontológico geralmente na rede própria ou credenciada, exceto em casos de urgência e emergência fora da região de atendimento do plano.</p>
            </div>
            <img src={img4} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box last'>
            <img src={img5} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Qual é a diferença entre seguro e plano de saúde?</h2>
              <p>Para fins de fiscalização pela ANS, o seguro saúde é tratado como um plano privado de assistência à saúde, conforme a Lei nº 10.185, de 2001.</p>
              <p>Para fins práticos, porém, existe uma grande diferença entre seguro e plano de saúde: é o reembolso das despesas médico-hospitalares. No seguro saúde, o reembolso é a regra, possibilitando livre escolha de médicos e hospitais. Nos demais planos de saúde, o reembolso é excepcional, sendo pouco comum e muitas vezes restrito a planos adquiridos apenas pelas classes de renda mais alta.</p>
              <p>Ambos oferecem serviços de assistência médica diferenciados, com maior ou menor abrangência, de acordo com o contrato assinado entre você e a operadora. Tanto no seguro como no plano de saúde, basicamente, você, pessoa física, pode escolher entre contratos individuais ou familiares e contratos coletivos empresariais ou por adesão. Atualmente, entretanto, as seguradoras especializadas em saúde não estão comercializando contratos individuais. </p>
            </div>
          </div>

        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroVidaColetivo