import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import banner from '../assets/images/para-empresa-banner.jpg'
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
import Benefits from '../components/Benefits'

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
            <Link to='/seguro_empresarial'>
              <div>
                <img src={closeUp} alt='agente inspecionando batida' />
                <span>Seguro Empresarial</span>
              </div>
            </Link>
            <Link to ='/seguro_auto_e_frotas'>
              <div>
                <img src={rowCars} alt='homem segurando casinha de madeira' />
                <span>Seguro Auto e Frotas</span>
              </div>
            </Link>
            <Link to='/seguro_condominio'>
              <div>
                <img src={img3} alt='Mulher segurando família de papel' />
                <span>Seguro Condomínio</span>
              </div>
            </Link>
            <Link to='/seguro_transporte'>
              <div>
                <img src={img4} alt='homem segurando uma balança da justiça' />
                <span>Seguro Transporte</span>
              </div>
            </Link>
            <Link to='/seguro_vidacoletivo'>
              <div>
                <img src={img5} alt='seguro de vida coletivo' />
                <span>Vida e Saúde Coletivo</span>
              </div>
            </Link>
            <Link to='/seguro_aereo'>
              <div>
                <img src={img7} alt='seguro aereo' />
                <span>Seguro Aéreo</span>
              </div>
            </Link>
            <Link to='/seguro_nautico'>
              <div>
                <img src={img8} alt='seguro nautico' />
                <span>Seguro Náutico</span>
              </div>
            </Link>
            <Link to ='/seguro_resp_civil'>
              <div>
                <img src={img10} alt='seguro responsabilidade civil' />
                <span>Seguro Resp Civil</span>
              </div>
            </Link>
            <Link to ='/seguro_risco_engenharia'>
              <div>
                <img src={img11} alt='seguro risco de engenharia' />
                <span>Risco Engenharia</span>
              </div>
            </Link>
            <Link to ='/seguro_imobiliario'>
              <div>
                <img src={img12} alt='seguro fiança' />
                <span>Seguro Fiança</span>
              </div>
            </Link>
            <Link to ='/seguro_equipamentos'>
              <div>
                <img src={img13} alt='seguro equipamentos' />
                <span>Equipamentos Portáteis</span>
              </div>
            </Link>
            <Link to='/seguro_agro'>
              <div>
                <img src={img14} alt='seguro agro' />
                <span>Seguro Agro</span>
              </div>
            </Link>
            {/* <Link to ='/seguro_equipamentos'>
              <div>
                <img src={img15} alt='seguro  e placa solar' />
                <span>Seguro Placa Solar</span>
              </div>
            </Link> */}
            <Link to ='/seguro_garantia'>
              <div>
                <img src={img16} alt='pessoas unidas segurando uma em cada braço' />
                <span>Seguro Garantia</span>
              </div>
            </Link>
              {/* <div>
                <img src={img17} alt='pessoas unidas segurando uma em cada braço' />
                <span>Seguro Orgãos Públicos</span>
              </div> */}
              <a href='#'>
            <div>
                <img src={img18} alt='pessoas unidas segurando uma em cada braço' />
                <span>Seguro Diversos</span>
              </div>
            </a>
          </div>
        </section>
        <Benefits />
      </div>
      <Footer />
    </div>
  )
}

export default ParaEmpresa