import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import banner from '../assets/images/banner-voce.jpg'
import agente from '../assets/images/agente-seguro.jpg'
import businessMan from '../assets/images/business-man.jpg'
import handsHoldingPaper from '../assets/images/hands-holding-paper.jpg'
import femaleCar from '../assets/images/female-car.jpg'
import fullShotTravel from '../assets/images/full-shot-travel.jpg'
import lawyer from '../assets/images/lawyer.jpg'
import villaHouseModel from '../assets/images/villa-house-model.jpg'
import openedNotebook from '../assets/images/opened-notebook.jpg'
import cyclist from '../assets/images/cyclist.jpg'
import wonderfulDog from '../assets/images/wonderful-dog.jpg'
import jato from '../assets/images/jato-de-negocios.jpg'
import iate from '../assets/images/bela-vista-do-iate.jpg'
import solar from '../assets/images/sistema-de-energia-solar.jpg'
import trator from '../assets/images/tractor-agricultural.jpg'
import construction from '../assets/images/trabalhadores-da-construcao.jpg'
import womanPen from '../assets/images/cropped-mid-sectiion.jpg'
import arms from '../assets/images/forma-quadrada.jpg'

import BannerButtons from '../components/BannerButtons'

import './Home.css'


function ParaVoce() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>PARA VOCÊ</h1>
            <p>Contamos com as melhores opções de seguros para você e sua família! Conheça abaixo as opções ou se preferir entre em contato direto com nossos especialistas!</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='section-container'>
          <div className='cards-middle'>
            <Link to='/seguro_auto'>
              <div>
                <img src={agente} alt='agente inspecionando batida' />
                <span>Seguro Auto</span>
              </div>
            </Link>
            <Link to='/seguro_residencial'>
              <div>
                <img src={businessMan} alt='homem segurando casinha de madeira' />
                <span>Seguro Residencial</span>
              </div>
            </Link>
            <Link to='/seguro_vida'>
              <div>
                <img src={handsHoldingPaper} alt='Mulher segurando família de papel' />
                <span>Seguro de Vida</span>
              </div>
            </Link>
            <Link to='/seguro_viagem'>
              <div>
                <img src={fullShotTravel} alt='mulher em cima de uma mala com vários pontos turisticos' />
                <span>Seguro Viagem</span>
              </div>
            </Link>
            <Link to ='/seguro_resp_civil'>
              <div>
                <img src={lawyer} alt='homem segurando uma balança da justiça' />
                <span>Seguro Resp Civil</span>
              </div>
            </Link>
            <Link to ='/seguro_imobiliario'>
              <div>
                <img src={villaHouseModel} alt='maquete de uma casa em cima de uma prancheta de projeto e as chaves' />
                <span>Seguro Imobiliário</span>
              </div>
            </Link>
            <Link to ='/seguro_equipamentos'>
              <div>
                <img src={openedNotebook} alt='computador e camera fotográfica em cima da mesa' />
                <span>Equipamentos</span>
              </div>
            </Link>
              <Link to ='/seguro_bike'>
                <div>
                  <img src={cyclist} alt='ciclista andando de bike numa estrada' />
                  <span>Seguro Bike</span>
                </div>
              </Link>
              <Link to ='/seguro_pet'>
                <div>
                  <img src={wonderfulDog} alt='mulher sorridente segurando um cachorro' />
                  <span>Seguro Pet</span>
                </div>
              </Link>
              <Link to='/seguro_aereo'>
                <div>
                  <img src={jato} alt='jato de negócios voando sobre as nuvens' />
                  <span>Seguro Aéreo</span>
                </div>
              </Link>
              <Link to='/seguro_nautico'>
                <div>
                  <img src={iate} alt='iate luxuoso no mar com por do sol ao fundo' />
                  <span>Seguro Náutico</span>
                </div>
              </Link>
              <Link to ='/seguro_equipamentos'>
                <div>
                  <img src={solar} alt='sistema de placas de energia solar no telhado de uma casa' />
                  <span>Seguro Placa Solar</span>
                </div>
              </Link>
              <Link to='/seguro_agro'>
                <div>
                  <img src={trator} alt='trator arando a terra' />
                  <span>Seguro Agro</span>
                </div>
              </Link>
              <Link to ='/seguro_garantia'>
                <div>
                  <img src={womanPen} alt='mulher segurando uma caneta e um contrato par assinar' />
                  <span>Seguro Garantia</span>
                </div>
              </Link>
              <div>
                <img src={arms} alt='pessoas unidas segurando uma em cada braço' />
                <span>Seguros Diversos</span>
              </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default ParaVoce