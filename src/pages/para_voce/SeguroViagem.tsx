import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice8.png'
import BannerButtons from '../../components/BannerButtons'

import img3 from '../../assets/images/conceito-de-viagens-com-bagagem-e-chapeu.jpg'
import img1 from '../../assets/images/bela-colagem-de-conceito-de-viagens.jpg'
import img2 from '../../assets/images/turista-apontando-para-cima.jpg'


import './../Home.css'

function SeguroViagem() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO VIAGEM</h1>
            <p>Seguro viagem é um serviço que tem como objetivo prestar suporte ao viajante ao enfrentar imprevistos no período de uma viagem.</p>
            <div className='banner-buttons'>
              <a className='know-more' href='#benefits'>VEJA MAIS</a>
              <a className='contact-us' href='#cotacao'>PEDIDO DE COTAÇÃO</a>
            </div>
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>CONHECENDO MAIS </h2>
              <p>Ele é a garantia de que você não ficará desamparado caso aconteça alguma eventualidade, seja antes, durante ou depois de sua viagem, é um item fundamental para qualquer viagem, até mesmo nos países em que a sua contratação não é obrigatória.</p>
              <p>Evita dores de cabeça e gastos extras que podem acabar com o passeio tão esperado.</p>
              <p>Um erro muito comum entre os viajantes é não contratar o seguro viagem para viagens nacionais, pois muitos acreditam que os planos de saúde são o suficiente para garantir a segurança de todos na viagem.</p>
              <p>Mas não é! A maioria dos planos de saúde só oferecem cobertura dentro do município contratado, ou somente dentro do estado.</p>
              <p>Por isso é sempre bom se precaver e investir na segurança durante os dias que ficará fora de casa, mesmo que seja dentro do seu país de origem.</p>
              <p>Sempre consulte seu plano de saúde para ver suas coberturas fora do estado, em todo caso consulte os planos do seguro viagem e fique mais tranquilo!</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>A EXIGÊNCIA DO CONTINENTE EUROPEU E O SEGURO VIAGEM</h2>
              <p>Nas viagens para alguns países da Europa — mais especificamente 26 países, nos quais fazem parte do Acordo de Schengen, estão: Alemanha, Áustria, Bélgica, Dinamarca, Eslovênia, Eslováquia, Espanha, Estônia, Finlândia, França, Grécia, Holanda, Hungria, Itália, Islândia, Letônia, Lituânia, Liechtenstein, Malta, Noruega, Luxemburgo, Polônia, Portugal, República Tcheca, Suécia e Suíça em todos estes países é obrigatório a contratação do seguro-viagem com cobertura mínima de 30 mil euros.</p>
              <p> O Tratado de Schengen estabelece que este seguro pelo menos deve cobrir assistência médica por doença e acidentes.</p>
              <p>No momento do contrato leia o mesmo com atenção, verificando o limite da cobertura, os itens cobertos pelo seguro e, principalmente, as exceções de atendimento. Observe também de que forma você pode entrar em contato com a empresa em caso de emergência durante a viagem e em caso de duvidas na contratação ou coberturas entre em contato com a KING'S Corretora de Seguros. </p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
            <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>ATENÇÃO COM O SEGURO VIAGEM DO CARTÃO DE CRÉDITO</h2>
              <p>Caso escolha o seguro-viagem oferecido pelo cartão de crédito, verifique exatamente quais são as condições de utilização. E, claro, as coberturas e as exceções.</p>
              <p>Normalmente, o seguro desse tipo só vale se a passagem aérea for comprada com o cartão por exemplo.</p>
              <p>Algumas administradoras oferecem seguros gratuitos, dependendo do tipo e da bandeira do cartão, sempre verifique e veja se o seguro do cartão realmente atende seus requisitos bem como suas necessidades em caso de uso ou se será necessário contratar um seguro mais abrangente com melhores coberturas. </p>


              <h3>Esportes de Aventura e Doenças Preexistentes</h3>
              <p>Os planos de seguro-viagem tradicionais não costumam oferecer cobertura de acidentes com esportes de aventura, como esqui, alpinismo e mergulho. Se sua viagem inclui atividades desse tipo na programação, o mais indicado é escolher um plano específico.</p>
              <p> Sempre informe a pratica de qualquer atividade fisíca quando for contratar o seguro viagem</p>
              <p>Sempre informe a pratica de qualquer atividade fisíca quando for contratar o seguro viagem</p>
              <p>Despesas com doenças preexistentes não costumam ser pagas pelo seguro.</p>
              <p>Em geral, em caso de emergência, apenas o primeiro atendimento é coberto pelo plano contratado.</p>
              <p>Nas viagens de navio, o atendimento costuma ser feito pelo médico de plantão a bordo.</p>
              <p>Confirme no contrato do seguro de viagem se este tipo de consulta é coberta pelo plano ou se a companhia fará o reembolso depois.</p>
            </div>
          </div>

          <div className='box last' id='cotacao'>
            <div className='box-text'>
              <h2>FAÇA A COTAÇÃO ONLINE NAS SEGURADORAS: </h2>
              <a target='_blank' href='https://wwws.portoseguro.com.br/vendaonline/viagem/home.ns?cod=f9ff3acb68ca47e580e5897328a19487&utm_source=1X43FJ&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_UH20YJ&utm_content=KINGS_CORRETORA_DE_SEGUROS '>Porto Seguros</a>
              <a target='_blank' href='https://servicos.tokiomarine.com.br/sva/view/digital/seguro-viagem/#/broker/8E63BE93-0A25-9C94-C560-235C60F9EEF0 '>Tokio Marine</a>
              <a target='_blank' href='https://portal.sulamericaseguros.com.br/seguroviagem.htm?ref=eyJkYWRvc1Byb2R1Y2FvIjp7IkFBIjoiMzYyOTAiLCJBViI6IjAiLCJFQSI6IjY5NjMwIiwiRVYiOiIyOTU1NDA3IiwidW9wRW1pc3NhbyI6IjMzNyIsInVvcE5lZ29jaW8iOiI1NjEzIn0sImNvcnJldG9yTm9tZSI6IktJTkcnUyBDT1JSRVRPUkEgREUgU0VHVVJPUyAiLCJpZENvcnJldG9yIjoxMTkzNjgsInBlcmNlbnR1YWxDb3JyZXRhZ2VtIjpbeyJwZXJjZW50dWFsQ29ycmV0YWdlbSI6IjIwLjAwIn0seyJwZXJjZW50dWFsQWdlbmNpYW1lbnRvIjoiMC4wMCJ9LHsicGVyY2VudHVhbFByZXN0YWNhb1NlcnZpY28iOiIwLjAwIn0seyJpbmRleE9wY2FvIjoiMyJ9XSwibm9tZVByb21vdG9yIjoiIiwiaW1nQ29ycmV0b3IiOiJodHRwczovL2NvcnJldG9yLnN1bGFtZXJpY2FzZWd1cm9zLmNvbS5ici9kYXRhL2ZpbGVzL0FBLzEzL0FELzQ0LzI5QzRENzEwQkY1QjhDQzcwODA4MDgwOC9Mb2dvJTIwLSUyMFNlbSUyMEZ1bmRvLnBuZyJ9 '>Sulamerica Seguros</a>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroViagem