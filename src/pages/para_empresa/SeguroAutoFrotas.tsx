import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/row-of-new-cars-in-port2.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/caminhoneira-em-frente-a-caminhoes-estacionados-apontando-o-dedo-para-os-veiculos-de-transporte.jpg'
import img2 from '../../assets/images/conceito-de-transporte-com-veiculos-estacionados.jpg'
import img3 from '../../assets/images/motorista-uber-elegante-dando-corrida-de-taxi.jpg'

import './../Home.css'

function SeguroAutoFrotas() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Auto e Frotas</h1>
            <p>O seguro de automóveis tem como objetivo garantir ao segurado a indenização ou reembolso dos prejuízos sofridos e despesas incorridas, devidamente comprovados, decorrentes dos riscos cobertos e relativos aos veículos segurados.</p>
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
              <p>Todos os critérios que orientam o seguro de automóvel para indivíduos são válidos para o de frota de veículos. Este, em função das características de determinado grupo segurável, pode ter condições especiais na contratação.</p>
              <p>A KING'S Corretora de Seguros entra em contato com você, preencha o formulário ao lado, mais informações serão necessárias para a cotação e devido enquadramento do seguro  ou em caso de renovação, nos envie  sua apólice a ser renovada.</p>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-text'>
              <h2>Como funciona o seguro automóvel frota?</h2>
              <p>Da mesma forma que o seguro automóvel individual, o de automóvel frota é facultativo e garante:</p>
              <ul>
                <li>indenização por danos acidentais causados ao veículo, ou por roubo ou furto (ou suas partes);</li>
                <li>ressarcimento por danos materiais ou pessoais causados pelo veículo a terceiros;</li>
                <li>indenização aos passageiros acidentados do veículo (ou seus beneficiários); e</li>
                <li>assistência ao veículo e seus ocupantes, em caso de acidente ou pane.</li>
              </ul>
              <p>A contratação do seguro é feita por meio de uma proposta. Esta, por sua vez, gera uma apólice, que é o contrato entre o segurado e a seguradora.</p>
              <p>O seguro automóvel frota costuma depender da análise de inúmeros aspectos, como: quantidade de veículos, histórico de sinistros, comportamento e características do grupo segurado, bônus, forma de cobrança e região de circulação, entre outros.</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box last'>
          <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>O que determina a classificação do seguro automóvel frota?</h2>
              <p>O conjunto de dois ou mais veículos caracteriza o seguro automóvel frota, que pode ser contratado na mesma seguradora por uma única pessoa jurídica ou física. Dependendo da seguradora, pode haver exigência de um número mínimo de veículos para a contratação desse tipo de seguro, alguma trabalham e consideram frota acima de 5 itens, outras com minimo de 10 itens, consulte a disponibilidade quando pedir a cotação!</p>
              <p>Quando solicitada por pessoa jurídica (empresa, associação de empregados de uma mesma empresa, etc.), a garantia contra os riscos cobertos pode ser estendida para os veículos de subsidiárias e coligadas, além de diretores e funcionários. No caso de pessoa física, é possível acrescentar, como beneficiários, pais, filhos, irmãos e cônjuge, consulte as seguradoras juntamente com a corretora para devido enquadramento de sua frota!</p>
              <p>Faça sua cotação de seguro conosco, é sem compromisso!</p>
            </div>     
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroAutoFrotas