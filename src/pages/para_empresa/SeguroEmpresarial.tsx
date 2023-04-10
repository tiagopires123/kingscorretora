import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/close-up-business-people-in-conference-room.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/negocios-ocidentais-e-chineses-em-hong-kong.jpg'
import img2 from '../../assets/images/empresarios-masculinos-e-femininos-trabalhando-no-tablet-no-escritorio.jpg'
import img3 from '../../assets/images/trabalhadores-considerando-o-prazo-do-contrato.jpg'
import img4 from '../../assets/images/mulheres-de-tiro-medio-trabalhando-juntos.jpg'
import img5 from '../../assets/images/parceiros-de-negocios-juntos-no-escritorio.jpg'
import img6 from '../../assets/images/designers-industriais-trabalhando-no-modelo-3d.jpg'
import img7 from '../../assets/images/retrato-de-empresaria-de-terno-olhando-para-o-relogio-esperando-por-alguem-verificando-o-tempo-enquanto-senta.jpg'



import './../Home.css'

function SeguroEmpresarial() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>EMPRESARIAL</h1>
            <p>Este seguro é destinado a pessoas jurídicas ou pessoas físicas que tenham suas atividades nas áreas de prestação de serviços, comércio varejista ou atacado, oficina, depósito e indústria.</p>
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
              <p>O Seguro tem por objetivo garantir, até o(s) limite(s) da(s) importância(s) segurada(s), o pagamento de indenização por prejuízos consequentes dos riscos cobertos, causados aos bens garantidos pela apólice. Eles integram o patrimônio do segurado, em um determinado endereço. As importâncias seguradas dos bens discriminados na apólice são fixadas pelo segurado com auxilio do corretor KING'S e devem ser definidas para cada cobertura pretendida, estabelecendo o limite máximo indenizável para cada cobertura que se pretende contratar.</p>
              <p>O compreensivo empresarial,  como mencionado engloba os setores de serviços, comércio e indústria, portanto se você tem um escritório, um pequena ou grande loja ou realiza qualquer tipo de empreendedorismo seu estabelecimento, industria ou comércio pode ser segurado, entre em contato!</p>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-text'>
              <h2>Como funciona o seguro Empresarial?</h2>
              <p>No Seguro Empresarial, as coberturas adicionais são concedidas a 1o Risco Absoluto. Já a cobertura básica poderá ser concedida de acordo com os seguintes critérios:</p>
              <p>valor em risco igual ou inferior a um determinado valor (usualmente R$ 5.000.000,00) – a cobertura é concedida a 1o Risco Absoluto;</p>
              <p>valor em risco superior a um determinado valor (usualmente R$ 5.000.000,00) – a cobertura é concedida a 1o Risco Relativo.</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
          <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Seguro a Primeiro Risco Absoluto</h2>
              <p>Neste tipo de seguro a companhia seguradora responde por qualquer prejuízo real coberto até o limite da importância segurada e não invoca a regra proporcional. Neste tipo de seguro a regra de rateio nunca é aplicada. </p>
              <h2>Seguro a Primeiro Risco Relativo</h2>
              <p>Neste tipo de seguro a companhia seguradora responde somente pelos prejuízos até o limite da importância segurada. Caso o valor supere o montante fixado na apólice o segurado terá que dividir as perdas como se fosse um seguro proporcional. </p>
            </div>     
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Em caso de rateio, traduzindo matematicamente</h2>
              <p>É facultado à seguradora o direito de indenizar o segurado com pagamento em dinheiro, com a reparação ou substituição dos bens sinistrados.</p>
              <p>Nas coberturas concedidas a Risco Total, cobertura básica e alguns riscos acessórios, as importâncias seguradas devem representar os valores em risco (valores reais dos bens segurados). Caso não representem, o segurado será considerado responsável pela diferença e estará sujeito ao mesmo risco que a seguradora na proporção da responsabilidade que lhe couber em rateio.</p>
              <p>Traduzindo matematicamente: Ind = P × IS ÷ VR </p>
              <p>Sendo: (Ind: Indenização), (P: Prejuízo), (IS: Importância Segurada) e (VR: Valor em Risco apurado na data do sinistro).</p>
            </div>
            <img src={img4} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
          <img src={img5} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <p>Entre as coberturas, apresentamos aquelas que podem ser consideradas possíveis para contratação em qualquer produto disponível no mercado:</p>
              <p><strong>Cobertura básica –</strong> na maior parte das vezes, é oferecida englobando os eventos: incêndio, queda de raio e explosão de qualquer natureza;</p>
              <p><strong>Coberturas adicionais</strong></p>
              <ul>
              <li>alagamento e inundação;</li>
              <li>anúncios luminosos;</li>
              <li>danos elétricos;</li>
              <li>derrame d’água/vazamento de sprinkler;</li>
              <li>desmoronamento;</li>
              <li>equipamentos eletrônicos/computação;</li>
              <li>quebra de máquinas;</li>
              <li>impacto de veículos;</li>
              <li>lucros cessantes ou despesas fixas;</li>
              <li>perda/pagamento de aluguel;</li>
              <li>quebra de vidros;</li>
              <li>queda de aeronaves;</li>
              <li>queimadas em zonas rurais;</li>
              <li>responsabilidade civil;</li>
              <li>roubo e furto qualificado de bens;</li>
              <li>tumultos/greve/lockout;</li>
              <li>valores no interior do estabelecimento e em mãos de portadores; e</li>
              <li>vendaval, furacão, ciclone, tornado e granizo ou vento forte.</li>
              </ul>
              <p>Cada seguradora oferece coberturas adicionais conforme suas condições gerais do produto! </p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Alguns dos tipos de seguros do ramo empresarial</h2>
              <p>Podem ser segurados todas as pessoas que possuem algum tipo de empresa de micro a grande porte. Sejam elas:</p>
              <ul>
                <li>Industrias/ Empresas;</li>
                <li>Comércio de bens e/ou serviços;</li>
                <li>Hotéis;</li>
                <li>Escritórios;</li>
                <li>Academias;</li> 
                <li>Bares e Restaurantes;</li>
                <li>Clínicas e consultórios;</li>
                <li>Escolas;</li> 
                <li>Clínicas Veterinárias e Pet Shops;</li>
                <li>Concessionárias;</li> 
                <li>Clinicas e salões de estética e beleza;</li>
                <li>Dentre outros.</li>
              </ul>
              <p>Os seguros empresariais possuem diferentes características de seguradora para seguradora de forma que, dependendo de sua necessidade, nem sempre o custo mais econômico é o que melhor irá atendê-lo.</p>
              <p>A KING'S Corretora de Seguros conhece essas diferenças, estuda sua empresa e apresenta o melhor produto com maior abrangência securitária, de modo a cumprir realmente a função de prestar um serviço na qual a orientação para melhor adequação de sua segurança e tranquilidade, assim realizando melhor atendimento, estamos a disposição! </p>
            </div>
            <img src={img6} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box last'>
            <img src={img7} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>SUJEITOS DA OPERAÇÃO</h2>
              <p>Na contratação de um plano de Seguros de Pessoas estão envolvidas as seguintes partes:</p>
                <ul>
                  <li><li>segurado – pessoa física que contrata ou, no caso de contratação sob a forma coletiva, adere ao plano;</li></li>
                  <li>seguradora – pessoa jurídica obrigatoriamente constituída sob a forma de sociedade anônima – S/A, que assume a responsabilidade pela cobertura dos riscos especificados na apólice, mediante o recebimento do prêmio correspondente;</li>
                  <li>corretor – pessoa física ou jurídica que faz a intermediação da contratação do plano;</li>
                  <li>beneficiário – pessoa física ou jurídica livremente indicada pelo segurado, respeitadas as determinações legais e regulamentares, para receber os valores dos capitais segurados – indenizações –, na hipótese de ocorrência do sinistro;</li>
                  <li>estipulante – pessoa física ou jurídica que propõe a contratação de plano coletivo, ficando investido de poderes de representação do segurado, nos termos da legislação e regulamentação em vigor.</li>
                </ul>

              <h3>PERÍODO DE COBERTURA</h3>
              <p>O período de cobertura é aquele durante o qual o segurado ou os beneficiários, quando for o caso, farão jus aos capitais segurados contratados. O período de cobertura pode ser temporário ou vitalício.</p>
              <p>Período de cobertura temporário é aquele em que o pagamento do capital segurado somente será feito se o evento ocorrer dentro de período perfeitamente determinado no contrato.</p>
              <p> Período de cobertura vitalício é aquele em que o pagamento do capital segurado será feito quando ocorrer o evento, a qualquer tempo.</p>
              <ul>
              <li>encanador (ou bombeiro hidráulico);</li>
              <li>chaveiro;</li>
              <li>eletricista;</li>
              <li>guarda de animais domésticos;</li>
              <li>limpeza de calhas;</li>
              <li>limpeza de caixa d' água</li>
              <li>desentupimento;</li>
              <li>assistências linhas brancas</li>
              </ul>
              <p>Dentre outras assistências de acordo com o seguro contratado e o pacote de assistência escolhido.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroEmpresarial