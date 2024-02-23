import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/condominio-em-uma-cidade-grande_33798-52.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/duas-lindas-meninas-em-pe-no-aeroporto.jpg'
import img2 from '../../assets/images/alto-negocio-unico-edificio-em-branco.jpg'
import img3 from '../../assets/images/mao-segurando-o-modelo-de-imoveis-e-propriedades-da-casa.jpg'
import img4 from '../../assets/images/edificio-arranha-ceu.jpg'

import Benefits from '../../components/Benefits'

import './../Home.css'

function SeguroCondominio() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Condomínio</h1>
            <p>Este seguro é destinado a condomínios verticais e horizontais. A sua contratação é obrigatória, devendo amparar todos os danos materiais e tendo como bens seguráveis a estrutura do edifício, partes, instalações elétricas e hidráulicas, e partes comuns, bem como as áreas privativas (exceto fundações, alicerces e o terreno).</p>
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
              <p>Os condomínios podem ser divididos em Residenciais, escritórios e consultórios, comercial, misto, flats e apart-hotéis e shopping centers. Por definição, condomínio é uma edificação destinada a fins residenciais ou não residenciais, onde existe um domínio de mais de uma pessoa simultaneamente, cabendo a cada uma delas igual direito sobre partes comuns ou privativas.</p>
              <p>A contratação do seguro de condomínio é obrigatório pela legislação!</p>
            </div>
          </div>
          
          <div className='box'>
            <div className='box-text'>
              <h2>Como funciona o seguro de Condomínio?</h2>
              <p>É representado por edificação de um ou mais pavimentos construídos sob a forma de unidades autônomas, proprietárias de uma fração do terreno e coisas comuns, em que cada uma delas, para efeitos de identificação, é assinalada por designação especial numérica ou alfabética.</p>
              <p>Em função da sua ocupação, os condomínios se classificam em:</p>
              <ul>
                <li>condomínios residenciais – aqueles compostos exclusivamente por residências;</li>
                <li>condomínios de escritórios e consultórios – aqueles ocupados exclusivamente por escritórios e/ou consultórios;</li>
                <li>condomínios mistos – aqueles ocupados por estabelecimentos comerciais e residenciais;</li>
                <li>condomínios comerciais – aqueles nos quais prevalecem os estabelecimentos comerciais;</li>
                <li>Flats e apart-hotéis – aqueles cujas unidades autônomas se encontram em regime de locação temporária sob administração de empresa constituída para tal atividade, como as atividades de bares, restaurantes, áreas de lazer e garagens;</li>
                <li>shopping center – aqueles ocupados por estabelecimentos comerciais e identificados como shopping center nos cadastros dos órgãos públicos competentes.</li>
              </ul>
              <p> Existem algumas exclusões para o enquadramento do edifício no Seguro Condomínio, para as quais o seguro mais indicado seria o Empresarial, consulte seu corretor da KING'S para maiores informações! </p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
          <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>A Legislação e a Obrigatoriedade do seguro!</h2>
              <p>Código Civil, Art. 1.346. "É obrigatório o seguro de toda a edificação contra o risco de incêndio ou destruição, total ou parcial.</p>
              <p>Este artigo complementa o que dispõe a Lei dos Condomínios sobre o assunto:</p>
              <p>"Art. 13° Proceder-se-á ao seguro da edificação ou do conjunto de edificações, neste caso, discriminadamente, abrangendo todas as unidades autônomas e partes comuns, contra incêndio ou outro sinistro que cause destruição no todo ou em parte, computando-se o prêmio nas despesas ordinárias do condomínio.</p>
              <p>Parágrafo único. O seguro de que trata este artigo será obrigatoriamente feito dentro de 120 dias, contados da data da concessão do "habite-se", sob pena de ficar o condomínio sujeito à multa mensal equivalente a 1/12 (um doze avos) do imposto predial, cobrável executivamente pela municipalidade.</p>
              <p>Art. 16° Em caso de sinistro que destrua menos de dois terços da edificação, o síndico promoverá o recebimento do seguro e a reconstrução ou os reparos nas partes danificadas."</p>
            </div>     
          </div>

          <div className='box last'>
            <div className='box-text'>
              <p>A contratação do primeiro seguro deve ser realizada, no máximo, até 120 dias da concessão do Habite-se.</p>
              <p>Recomenda-se, no entanto, que seja feita a contratação tão logo a ocupação do imóvel seja iniciada.</p>
              <p>As renovações deverão ser continuadas, sem interrupções, e com uma periodicidade anual quando não prevista na convenção.</p>
              <p>Tanto a Lei nº. 4.591 como o Novo Código Civil estabelecem a obrigatoriedade da contratação de seguro, que cubra toda a edificação contra o risco de incêndio ou outro evento qualquer, que possa causar destruição total ou parcial das instalações seguradas.</p>
              <p>O síndico, de acordo com a mesma lei, responde ativa e passivamente, em juízo ou fora dele, por qualquer inadequação ou insuficiência de seguro constatada.</p>
              <p>Uma vez que a legislação não especifica que outros eventos devem ser segurados além de incêndio, deixando vaga a definição das coberturas obrigatórias, deve-se contratar um seguro que garanta todos os eventos a que o condomínio esteja efetivamente sujeito, entre os quais destacamos: raio, explosão, queda de aeronaves, danos elétricos, vendaval, impacto de veículos, quebra de vidros, roubo, e os seguros de responsabilidade civil do condomínio, síndico, dos portões e veículos.</p>
              <p>Cumpre lembrar que a responsabilidade pela renovação do seguro recai sobre o síndico, em cujo mandato a apólice foi emitida, não se justificando a insuficiência de coberturas em apólices vencidas, como isenção de responsabilidade do síndico no caso de sinistro.</p>
              <p>Portanto, é essencial a revisão de valores e de coberturas a cada renovação.</p>
            </div>
            <img src={img4} alt='jato de negócios voando sobre as nuvens' />
          </div>
        </section>
        <Benefits />
      </div>
      <Footer />
    </div>
  )
}

export default SeguroCondominio