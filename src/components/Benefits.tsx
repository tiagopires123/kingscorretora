import calculator from '../assets/images/calculator.svg'
import plus from '../assets/images/plus.svg'
import crown from '../assets/images/crown.svg'
import card from '../assets/images/card.svg'
import chat from '../assets/images/chat.svg'
import like from '../assets/images/like.svg'
import speed from '../assets/images/speed.svg'
import headset from '../assets/images/headset.svg'

import './Benefits.css'

function Benefits() {
    return (
        <section className='benefits' id='benefits'>
        <h2>Principais Vantagens</h2>
        <div className='cards'>
        <div className='card'>
            <img src={calculator} alt='ícone calculadora' />
            <span>Melhores condições</span>
            <p>Aqui você encontra seguros com as melhores condições e preços do mercado.</p>
        </div>
        <div className='card'>
            <img src={plus} alt='ícone mais' />
            <span>Mais opções</span>
            <p>Conte com o maior portfólio de seguros do mercado. O seu seguro do seu jeito!</p>
        </div>
        <div className='card'>
            <img src={crown} alt='ícone coroa' />
            <span>Do seu jeito</span>
            <p>Personalize as suas coberturas do seu seguro e pague só pelo que escolher! </p>
        </div>
        <div className='card'>
            <img src={card} alt='ícone cartão de crédito' />
            <span>Viabilidade Pagamento</span>
            <p>Personalize as suas coberturas do seu seguro e pague só pelo que escolher! </p>
        </div>

        <div className='card'>
            <img src={chat} alt='ícone chat' />
            <span>Atendimendo Personalizado</span>
            <p>Imprevistos acontecem. Conte com atendimento personalizado de nossos especialistas</p>
        </div>
        <div className='card'>
            <img src={like} alt='ícone like' />
            <span>Credibilidade</span>
            <p>Conte com toda a credibilidade da KING’S e das maiores seguradoras do Brasil.</p>
        </div>
        <div className='card'>
            <img src={speed} alt='ícone velocímetro' />
            <span>Velocidade</span>
            <p>Com nosso atendimento rápido, você conta com uma equipe de especialistas e não fica na mão.</p>
        </div>
        <div className='card'>
            <img src={headset} alt='ícone headset' />
            <span>Multicanal</span>
            <p>Estamos sempre prontos para te atender e ajudar, sempre que você precisar. </p>
        </div>
        </div>
    </section>
    )
  }
  
  export default Benefits
  