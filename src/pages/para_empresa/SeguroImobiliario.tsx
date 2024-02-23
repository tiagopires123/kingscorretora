import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/villa-house-model-key-and-drawing-on-retro-desktop-real-estate-sale-concept2.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/familia-passando-um-tempo-junta-em-casa.jpg'
import img2 from '../../assets/images/modelo-de-casa-de-ferias-chave-e-desenho-em-area-de-trabalho-retro-conceito-de-venda-de-imoveis.jpg'

import Benefits from '../../components/Benefits'

import './../Home.css'

function SeguroImobiliario() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>FIANÇA LOCATÍCIA IMOBILIÁRIO</h1>
            <p>Seguro Fiança Locatícia tem por objetivo cobrir, durante a vigência da apólice, os prejuízos ocorridos em consequência do inadimplemento, pelo garantido, do contrato de locação, reconhecidos por sentença judicial através de decretação de despejo, em razão do não pagamento das obrigações e/ou encargos.</p>
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
              <p>Esse seguro também poderá cobrir, mediante coberturas adicionais, danos físicos causados pelo inquilino ao imóvel e também multas contratuais. O Seguro de Fiança Locatícia está previsto na Lei do Inquilinato como uma das formas aceitas de se prestar fiança.</p>
              <p>O seguro de fiança locatícia substitui o fiador e garante ao proprietário do imóvel (locador) o recebimento dos aluguéis e encargos vencidos e não pagos pelo inquilino (locatário). No Seguro de Fiança Locatícia, não é necessária a caracterização de insolvência, bastando apenas que haja a comprovação da inadimplência.</p>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-text'>
              <h2>Entendo um pouco do seguro de Fiança Locatícia</h2>
              <p>As partes contratantes do Seguro de Fiança Locatícia são:</p>
              <ul>
                <li>seguradora – sociedade devidamente autorizada a operar nesse ramo de seguro pela SUSEP;</li>
                <li>segurado – locador do imóvel urbano, conforme definido no contrato de locação coberto por esse seguro;</li>
                <li>garantido – locatário, conforme definido no contrato de locação coberto por esse seguro; e</li>
                <li>estipulante – pessoa física ou jurídica que contrata apólice coletiva de seguros, ficando investida dos poderes de representação dos segurados perante a seguradora. Exemplo: administradora de imóveis.</li>
              </ul>
              <p>Para obter plena cobertura do seguro, o segurado deverá:</p>
              <ul>
                <li>submeter previamente à seguradora a minuta do contrato de locação;</li>
                <li>fazer com que esse contrato opere em perfeita forma e vigência legais, e obter da seguradora anuência prévia para quaisquer alterações que esse contrato sofra;</li>
                <li>não efetuar outros Seguros de Fiança para garantir o mesmo contrato;</li>
                <li>reconhecer o direito da seguradora de fiscalizar a exatidão de suas declarações e facilitar os meios para esta averiguação; e</li>
                <li>pagar o prêmio do seguro, quando o garantido não o fizer</li>
              </ul>
              <p>A vigência da cobertura será idêntica à vigência do contrato de locação, sendo possível adotar-se a vigência anual, desde que estabelecida a obrigação, por parte das seguradoras, de renovar a apólice.</p>
              <p>Prorrogada a locação por prazo indeterminado, será necessária a apresentação de nova proposta para análise por parte da seguradora.</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

        </section>
        <Benefits />
      </div>
      <Footer />
    </div>
  )
}

export default SeguroImobiliario