import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/cropped-mid-section-of-unrecognizable-woman-signing-the-document2.png'
import BannerButtons from '../../components/BannerButtons'

import img2 from '../../assets/images/conceito-de-controle-de-qualidade-padrao-m.jpg'
import img1 from '../../assets/images/3386434_58047.jpg'

import './../Home.css'

function SeguroGarantia() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Garantia</h1>
            <p>Seguro Garantia é o seguro que garante o fiel cumprimento das obrigações contraídas pelo tomador junto ao segurado em contratos privados e/ou públicos, bem como em licitações, como definido pela legislação em vigor.
  Por exemplo, cobre o risco de uma das partes de contratos públicos, privados ou de licitações não cumprir prazos e custos previstos.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Seguro Garantia: Setor Público</h2>
              <p>O seguro que objetiva garantir o fiel cumprimento das obrigações assumidas pelo tomador perante o segurado em razão de participação em licitação, em contrato principal pertinente a obras, serviços, inclusive de publicidade, compras, concessões ou permissões no âmbito dos Poderes da União, Estados, Distrito Federal e Municípios, ou ainda as obrigações assumidas em função de:</p>
              <ul>
                <li>processos administrativos;</li>
                <li>processos judiciais, inclusive execuções fiscais;</li>
                <li>parcelamentos administrativos de créditos fiscais, inscritos ou não em dívida ativa; e</li>
                <li>regulamentos administrativos.</li>
              </ul>
              <p> Encontram-se também garantidos por este seguro os valores devidos ao segurado, como multas e indenizações, oriundos do inadimplemento das obrigações assumidas pelo tomador, previstos em legislação específica, para cada caso.</p>
            </div>
          </div>
          
          <div className='box last'>
            <div className='box-text'>
              <h2>Seguro Garantia: Setor Privado</h2>
              <p>O seguro que objetiva garantir o fiel cumprimento das obrigações assumidas pelo tomador perante o segurado no contrato principal firmado em âmbito distinto do Setor Público.</p>
              <p>O Contrato Principal é o documento contratual, seus aditivos e anexos, que especificam as obrigações e direitos do segurado e do tomador.</p>
              <p>As Modalidades de Garantia – Segurado Setor Privado, são:</p>
              <ul>
                <li>Executante;</li>
                <li>Retenção de Pagamento;</li>
                <li>Adiantamento de Pagamento;</li>
                <li>Manutenção Corretiva; e</li>
                <li>Imobiliário.</li>
              </ul>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroGarantia