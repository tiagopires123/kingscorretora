import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice17.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/sol-brilhos-sobre-madeira-roda-segurado-homem.jpg'
import img2 from '../../assets/images/Slice18.png'
import img3 from '../../assets/images/Slice19.png'
import img4 from '../../assets/images/Slice20.png'

import './../Home.css'

function SeguroNautico() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Naútico</h1>
            <p>É o seguro para quaisquer tipos de embarcações ou equipamentos destinados a operar na água.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='content-box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>CONHECENDO MAIS </h2>
              <p>Para a contratação de qualquer das coberturas do Seguro de Cascos Marítimos, são indispensáveis as seguintes informações:</p>
                <ul>
                  <li>nome da embarcação (indicar o nome anterior, caso tenha sido modificado);</li>
                  <li>nome/histórico do segurado (proprietário atual e anteriores, se houver);</li>
                  <li>ano de construção;</li>
                  <li>tonelagem de porte bruto – TPB;</li>
                  <li>âmbito da navegação;</li>
                  <li>tipo de navio;</li>
                  <li>tipo de propulsão;</li>
                  <li>tipo de potência dos motores;</li>
                  <li>material em que a embarcação é construída;</li>
                  <li>atividade a que a embarcação se destina;</li>
                  <li>número de inscrição da embarcação junto à Capitania dos Portos (para embarcação de esporte e recreio);</li>
                  <li>sinistralidade dos últimos cinco anos;</li>
                  <li>registro no Tribunal Marítimo.</li>
                </ul>
              </div>
            </div>
          
          <div className='content-box'>
            <div className='box-text'>
              <h2>Classificação das Embarcações</h2>
              <p>A classificação das embarcações é prevista pelo Decreto 2.596/98, que regulamenta a Lei de Segurança do Tráfego Aquaviário.</p>
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

          <div className='content-box'>
            <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>SUJEITOS DA OPERAÇÃO</h2>
              <p>Na contratação de um plano de Seguros de Pessoas estão envolvidas as seguintes partes:</p>
              <p><strong>Quanto à Navegação</strong></p>
                <ul>
                  <li>Mar Aberto – realizada em águas marítimas consideradas desabrigadas, podendo ser longo curso ou alto mar, realizada entre portos brasileiros e estrangeiros;</li>
                  <li>Longo curso ou alto mar: realizada entre portos brasileiros e estrangeiros;</li>
                  <li>Pequena ou grande cabotagem: realizada entre portos do litoral brasileiro;</li>
                  <li>Apoio marítimo: realizada para o apoio logístico a embarcações e/ou instalações em águas territoriais nacionais, como as plataformas de petróleo;</li>
                  <li>Interior – realizada em hidrovias, como rios, lagos, canais, lagoas, baías e enseadas.</li>
                </ul>
              <p><strong>Quanto à Propulsão</strong></p>
              <p>A motor, a vela, sem propulsão própria, a remo.</p>
              <p><strong>Quanto ao Serviço ou Atividade</strong></p>
              <p>Transporte de passageiros, transporte de carga, esporte ou recreio, pesca, pesquisa científica.</p>
            </div>
          </div>

          <div className='content-box last'>
            <div className='box-text'>
              <h3>Bens Seguráveis</h3>
              <p>Podem ser objeto do seguro em apólices de Seguros de Cascos Marítimos: balsas; cábreas; chatas; diques flutuantes; dragas; embarcações de turismo; embarcações em construção; embarcações para transporte de passageiros; escunas; iates; jet-boat; jet-ski; lanchas; navios (petroleiros, tanques, carga geral, graneleiro, gaseiros, ore-oil, químico, porta-contêiner, roll-on roll-off); rebocadores; saveiros; supply boats; unidades de apoio às plataformas de petróleo; e veleiros.</p>

              <h3>PRINCIPAIS OBRIGAÇÕES DO SEGURADO</h3>
              <p>Deve estar ciente das medidas conservatórias e preventivas que consistem na obrigação de agir como se não tivesse seguro e, sempre que possível, agir em concordância com a seguradora, o que não implica prévio reconhecimento de cobertura para risco;</p>
              <p>Deve saber que a tripulação tem que ser habilitada de acordo com a lei e com as exigências das autoridades portuárias. O segurado, armador ou administrador devem diligenciar no sentido de evitar infrações de leis e regulamentos, especialmente em relação à navegação e ao serviço para o qual a embarcação está autorizada;</p>
              <p>Deve saber que é responsável pela manutenção das condições de conservação e funcionamento da embarcação, verificadas por meio de vistorias da Capitania dos Portos, das sociedades classificadoras e de peritos indicados pela seguradora. A negligência caracterizada ou a omissão culposa do segurado, no cumprimento desta obrigação, é considerada fato do segurado (risco excluído).</p>
            </div>
            <img src={img4} alt='jato de negócios voando sobre as nuvens' />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroNautico