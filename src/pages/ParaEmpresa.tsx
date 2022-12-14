import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/images/para-empresa-banner.jpg'
import trator from '../assets/images/tractor-agricultural.jpg'
import construction from '../assets/images/trabalhadores-da-construcao.jpg'
import womanPen from '../assets/images/cropped-mid-sectiion.jpg'
import arms from '../assets/images/forma-quadrada.jpg'
import closeUp from '../assets/images/close-up-business.jpg'
import rowCars from '../assets/images/row-of-new-cars.jpg'
import img3 from '../assets/images/condominio-em-uma-cidade-grande_33798-5.jpg'
import img4 from '../assets/images/man-by-the-truck-guy-in-a-delivery-uniform-man-in-a-medical-mask-coronavirus-concept.jpg'
import img5 from '../assets/images/hands-holding-paper.jpg'
import img6 from '../assets/images/full-shot-travel.jpg'
import img7 from '../assets/images/jato-de-negocios.jpg'
import img8 from '../assets/images/bela-vista-do-iate.jpg'
import img9 from '../assets/images/vista-do-topo-medico-e-paciente-maos-segurando-um-coracao-vermelho-na-mesa-branca_38391-541.jpg'
import img10 from '../assets/images/lawyer.jpg'
import img11 from '../assets/images/trabalhadores-da-construcao.jpg'
import img12 from '../assets/images/villa-house-model.jpg'
import img13 from '../assets/images/opened-notebook.jpg'
import img14 from '../assets/images/tractor-agricultural.jpg'
import img15 from '../assets/images/sistema-de-energia-solar.jpg'
import img16 from '../assets/images/cropped-mid-sectiion.jpg'
import img17 from '../assets/images/grey-marble-column-details-on-building.jpg'
import img18 from '../assets/images/forma-quadrada.jpg'

import BannerButtons from '../components/BannerButtons'

import './Home.css'


function ParaEmpresa() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>PARA SUA EMPRESA</h1>
            <p>Contamos com as melhores opções de seguros para você e sua família! Conheça abaixo as opções ou se preferir entre em contato direto com nossos especialistas!</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='section-container'>
          <div className='cards-middle'>
              <div>
                <img src={closeUp} alt='agente inspecionando batida' />
                <span>Seguro Empresarial</span>
              </div>
              <div>
                <img src={rowCars} alt='homem segurando casinha de madeira' />
                <span>Seguro Auto e Frotas</span>
              </div>
              <div>
                <img src={img3} alt='Mulher segurando família de papel' />
                <span>Seguro Condomínio</span>
              </div>

              <div>
                <img src={img4} alt='homem segurando uma balança da justiça' />
                <span>Seguro Transporte</span>
              </div>
              <div>
                <img src={img5} alt='maquete de uma casa em cima de uma prancheta de projeto e as chaves' />
                <span>Seguro de Vida</span>
              </div>

              <div>
                <img src={img6} alt='computador e camera fotográfica em cima da mesa' />
                <span>Seguro Viagem</span>
              </div>
              <div>
                <img src={img7} alt='ciclista andando de bike numa estrada' />
                <span>Seguro Aéreo</span>
              </div>
              <div>
                <img src={img8} alt='mulher sorridente segurando um cachorro' />
                <span>Seguro Náutico</span>
              </div>

              <div>
                <img src={img9} alt='jato de negócios voando sobre as nuvens' />
                <span>Seguro Saúde</span>
              </div>
              <div>
                <img src={img10} alt='jato de negócios voando sobre as nuvens' />
                <span>Seguro Resp Civil</span>
              </div>
              <div>
                <img src={img11} alt='iate luxuoso no mar com por do sol ao fundo' />
                <span>Risco Engenharia</span>
              </div>
              <div>
                <img src={img12} alt='sistema de placas de energia solar no telhado de uma casa' />
                <span>Seguro Imobiliário</span>
              </div>

              <div>
                <img src={img13} alt='trator arando a terra' />
                <span>Equipamentos</span>
              </div>
              <div>
                <img src={img14} alt='trabalhadores em uma laje de uma obra' />
                <span>Seguro Agro</span>
              </div>
              <div>
                <img src={img15} alt='mulher segurando uma caneta e um contrato par assinar' />
                <span>Seguro Placa Solar</span>
              </div>

              <div>
                <img src={img16} alt='pessoas unidas segurando uma em cada braço' />
                <span>Seguro Garantia</span>
              </div>
              <div>
                <img src={img17} alt='pessoas unidas segurando uma em cada braço' />
                <span>Seguro Orgãos Públicos</span>
              </div>
              <div>
                <img src={img18} alt='pessoas unidas segurando uma em cada braço' />
                <span>Seguro Diversos</span>
              </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default ParaEmpresa