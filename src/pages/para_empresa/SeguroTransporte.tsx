import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/man-by-the-truck-guy-in-a-delivery-uniform-man-in-a-medical-mask-coronavirus-concept2.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/motorista-de-caminhao-profissional-na-frente-de-um-longo-veiculo-de-transporte-segurando-o-polegar-para-cima-pronto-para-um-novo-passeio.jpg'
import img2 from '../../assets/images/jovem-trabalhador-manual-feliz-carregando-caixas-de-papelao-na-van-de-entrega-enquanto-se-comunica-com-seus-colegas.jpg'
import img3 from '../../assets/images/obscurecido-rua-cena-cidade-aviao-voando-sobre.jpg'
import img4 from '../../assets/images/veiculo-de-caminhao-longo-pronto-para-entrega-e-transporte.jpg'
import img5 from '../../assets/images/motorista-de-caminhao-profissional-de-meia-idade-com-roupas-casuais-dirigindo-veiculo-de-caminhao-e-entregando-carga-no-destino.jpg'

import './../Home.css'

function SeguroTransporte() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Transporte/Carga - RC Transportador</h1>
            <p>Por definição, o Seguro de Transportes é um contrato pelo qual a seguradora se obriga a indenizar ao segurado os prejuízos decorrentes de danos materiais causados à carga durante o transporte.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>CONHECENDO MAIS</h2>
              <p>Em grande parte das situações, o Seguro de Transportes pode ser considerado como seguro a risco decorrido, ou seja, o pagamento dos prêmios ocorre posteriormente à vigência e exposição dos riscos.</p>
              <p>Os Seguros de Transportes Internacionais referem-se às viagens realizadas do Brasil para o exterior – exportações – e do exterior para o Brasil – importações.</p>
              <p>Existem tipos de Seguro de Transporte a serem contratados, depende basicamente de três fatores, a saber:</p>
              <ul>
                <li>Responsável pela Contratação: Embarcador e Transportador.</li>
                <li>Natureza da Operação: Nacional e Internacional.</li>
                <li>Modais Utilizados: Aquaviário, Terrestre e/ou Aéreo.</li>
              </ul>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-text'>
              <h2>Modal</h2>
              <p>O Modal é o tipo de transportes que será utilizado, podendo a operação envolver mais de um modal.</p>
              <p>Os modais mais comuns e conhecidos são:</p>
              <p>Aquaviário – são todos aqueles em que os meios de transportes se deslocam por água, podendo ser:</p>
              <ul>
                <li>marítimo (pelo mar);</li>
                <li>cabotagem (pelo mar ao longo da costa);</li>
                <li>fluvial (por rios navegáveis); e</li>
                <li>lacustre (por lagos/lagoas navegáveis).</li>
              </ul>
              <p>Elementos como cartas oficiais de navegação, cadastro e certificação de embarcações são essenciais à legalidade desse tipo de operação.</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
            <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Aéreo e Terrestre</h2>
              <p>Aéreo - são todos aqueles em que os meios de transportes se deslocam pelo ar.</p>
              <p>Basicamente, estamos falando de aeronaves, devidamente regulamentadas pelos órgãos nacionais e internacionais de aviação.</p>
              <p>Terrestres – são todos aqueles em que os meios de transportes se​ deslocam por terra, podendo ser rodoviário e ferroviário.</p>
              <p>Na maioria das regiões brasileiras, esse modal é o mais utilizado.</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Seguro Transporte</h2>
              <p>É o seguro feito pelo embarcador, ou seja, por pessoa física ou jurídica que possua interesse direto na mercadoria ou bens transportados. O embarcador é, em geral, o proprietário da carga, mas também pode ser, por exemplo, uma empresa de logística deslocando um bem ou mercadoria de propriedade de sua contratante.</p>
              <p>Este seguro tem por objetivo repor ao segurado os prejuízos causados aos seus bens e/ou mercadorias durante o processo de transporte, de acordo com a cobertura contratada e conforme o modal utilizado.</p>
            </div>
            <img src={img4} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box last'>
            <img src={img5} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text '>
              <h2>Seguro Responsabilidade Civil Transportador</h2>
              <p>É o seguro feito pelo transportador e cobre a responsabilidade dele sobre a mercadoria recebida para transporte, conta com a emissão de conhecimento de embarque ou documento semelhante emitido no momento do embarque da carga.</p>
              <p>Este seguro cobre também, em algumas circunstâncias, os danos às mercadorias nos armazéns/depósitos do segurado por um período especificado na apólice, isto enquanto a mercadoria estiver sob a guarda e responsabilidade do transportador.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroTransporte