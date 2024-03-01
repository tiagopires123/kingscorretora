import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/images/sobre-nos-banner.jpg'
import img1 from '../assets/images/assistencia.jpg'

import img4 from '../assets/images/tiago-pavan.jpg'
import img5 from '../assets/images/caetano-panobianco.jpg'

import BannerButtons from '../components/BannerButtons'
import Benefits from '../components/Benefits'

import './Home.css'
import './SobreNos.css'


function Assistencia24h() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Assistência 24h</h1>
            <p>Trabalhamos com as melhores e mais tecnológicas seguradoras do mercado!</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Assistência 24h</h2>
              <p>Caso necessite de assistência disponível 24hr e para também consultar à apólice, abertura e comunicação de sinistros, andamentos de processos entre outros, selecione um dos telefones/sites na lista a seguir, para melhor encaminhamento consulte sempre os telefone diretamente no site da seguradora contratada, em caso de dúvidas entre em contato com a KING’S Corretora de Seguro, você pode também entrar em contato diretamente conosco para maiores informações e auxiliares no momento de um sinistro ou assistência 24h;</p>
            </div>
          </div>

          <div className='box-text full'>
            
              <h2>SEGURADORAS </h2>
              <p>
                ALLIANZ <br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.allianz.com.br/contato.html" target="_blank">https://www.allianz.com.br/contato.html</a><br />
                WhatsApp Allianz: +55 11 4090-1110<br />
                WhatsApp Assistência 24h Allianz: +55 11 4090-1444<br />
                TELEFONE: 0800 013 0700<br />
                <br />
                ALIRO – Grupo Liberty Seguros <br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.aliroseguro.com.br/Pages/atendimento/nossos-telefones.aspx" target="_blank">https://www.aliroseguro.com.br/Pages/atendimento/nossos-telefones.aspx</a><br />
                WhatsApp: +55 11 3206-1414<br />
                TELEFONE: 0800 770 1318<br />
                <br />
                ARGO<br />
                SITE: <a href="https://argoseguros.com.br" target="_blank">https://argoseguros.com.br</a><br />
                Capitais e Região Metropolitana: 4003-1525<br />
                Demais Localidades: 0800 888 0105<br />
                <br />
                AZUL – Grupo PORTO SEGURO<br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.azulseguros.com.br/outros/assistencia-24h/" target="_blank">https://www.azulseguros.com.br/outros/assistencia-24h/</a><br />
                WhatsApp: +55 21 3906-2985 <br />
                TELEFONE: 0800 703 0203<br />
                <br />
                BRADESCO <br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.bradescoseguros.com.br/clientes/servicos/atendimento-central-de-sinistros/auto" target="_blank">https://www.bradescoseguros.com.br/clientes/servicos/atendimento-central-de-sinistros/auto</a><br />
                WhatsApp: +55 11 3003-1022<br />
                <br />
                CHUBB<br />
                SITE: <a href="https://www.chubb.com/br-pt/contact/contact.html" target="_blank">https://www.chubb.com/br-pt/contact/contact.html</a><br />
                TELEFONE: 0800 703 6665<br />
                <br />
                ESSOR <br />
                SITE: <a href="https://www.essor.com.br/atendimento-ao-segurado/" target="_blank">https://www.essor.com.br/atendimento-ao-segurado/</a><br />
                Consultar telefones via site para cada segmento<br />
                <br />
                EXCELSIOR<br />
                SITE: <a href="https://www.excelsiorseguros.com.br/" target="_blank">https://www.excelsiorseguros.com.br/</a><br />
                Consultar telefones via site para cada segmento<br />
                <br />
                FATOR<br />
                SITE: <a href="https://fatorseguradora.com.br/#sinistros" target="_blank">https://fatorseguradora.com.br/#sinistros</a><br />
                Consultar telefones via site para cada segmento<br />
                <br />
                HDI<br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.hdiseguros.com.br/servicos/assistencia-24h" target="_blank">https://www.hdiseguros.com.br/servicos/assistencia-24h</a><br />
                WhatsApp: +55 800 770 1608<br />
                3003-5390 - Regiões Metropolitanas<br />
                0800-434-4340 - Demais Regiões<br />
                <br />
                LIBERTY <br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.aliroseguro.com.br/Pages/atendimento/nossos-telefones.aspx" target="_blank">https://www.aliroseguro.com.br/Pages/atendimento/nossos-telefones.aspx</a><br />
                WhatsApp: +55 11 3206-1414<br />
                TELEFONE: 0800 770 1318<br />
                <br />
                MAPFRE<br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                Site: <a href="https://www.mapfre.com.br/atendimento/nossos-telefones/" target="_blank">https://www.mapfre.com.br/atendimento/nossos-telefones/</a><br />
                Whatsapp: +55 11 4004-0101 <br />
                TELEFONE: 0800 775 4545<br />
                <br />
                MONGERALAEGON<br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://mag.com.br/atendimento/relacionamento/telefones" target="_blank">https://mag.com.br/atendimento/relacionamento/telefones</a><br />
                TELEFONE: 0800 026 0909<br />
                <br />
                OCEANICA <br />
                SITE: <a href="https://oceanicaseguros.net/" target="_blank">https://oceanicaseguros.net/</a><br />
                Whatsapp: +55 46 2603-0203<br />
                TELEFONE: 0800 740 7812<br />
                <br />
                PORTO SEGURO <br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://portoseguro.com.br/" target="_blank">https://portoseguro.com.br/</a><br />
                WhatsApp: +55 11 3003-9303<br />
                TELEFONE: 0800 727 0800<br />
                <br />
                SOMPO<br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://sompo.com.br/fale-conosco/central-de-atendimento/" target="_blank">https://sompo.com.br/fale-conosco/central-de-atendimento/</a><br />
                WhatsApp: +55 11 3156-2990<br />
                TELEFONE: 0800 77 19 119<br />
                <br />
                SUHAI<br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://suhaiseguradora.com/contato/" target="_blank">https://suhaiseguradora.com/contato/</a><br />
                WhatsApp: +55 11 3003-0335<br />
                TELEFONE: 0800-327-8424<br />
                <br />
                SULAMERICA<br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://portal.sulamericaseguros.com.br/canaisdeatendimento/" target="_blank">https://portal.sulamericaseguros.com.br/canaisdeatendimento/</a><br />
                WhatsApp; +55 11 3004-9723<br />
                TELEFONE: 11 3004-9723<br />
                <br />
                SWISS RE <br />
                SITE: <a href="https://corporatesolutions.swissre.com/brasil-seguros/sobre-nos/contato.html" target="_blank">https://corporatesolutions.swissre.com/brasil-seguros/sobre-nos/contato.html</a><br />
                <br />
                TOKIO MARINE <br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.tokiomarine.com.br/atendimento/" target="_blank">https://www.tokiomarine.com.br/atendimento/</a><br />
                WhatsApp: +55 11 99578-6546<br />
                TELEFONE: 0800 31 86546<br />
                <br />
                ZURICH <br />
                Baixe o aplicativo do segurado em seu smartphone<br />
                SITE: <a href="https://www.zurich.com.br/pt-br/atendimento" target="_blank">https://www.zurich.com.br/pt-br/atendimento</a><br />
                WhatsApp: +55 11 2890-2121<br />
                TELEFONE: 0800 285 4141<br />
                <br />
                VIDROS <br />
                Os atendimentos de vidros podem ser abertos diretamente pelo segurado nos canais abaixo, para todos as seguradoras com as quais <br />trabalhamos com seguro auto é possível realizar a abertura pela AUTOGLASS no link abaixo. Em caso de duvidas permanecemos a disposição!<br />
                AUTOGLASS – ALLIANZ; AZUL; BRADESCO; HDI; LIBERTY (ALIRO); MAPFRE; PORTO SEGURO; SOMPO, TOKIO MARINE E ZURICH.<br />
                <a href="https://www.abraseuatendimento.com.br/#/">https://www.abraseuatendimento.com.br/#/</a><br />
                <br />
                CARGLASS <br />
                <a href="https://www.agendeseuservico.com/">https://www.agendeseuservico.com/</a><br />
                <br />
              </p>
            
          </div>
        </section>
        <Benefits />
      </div>

      <section className='benefits'>
          <h2 className='specialists-title'>Nossos Especialistas</h2>
          <div className='specialists'>
            <div className='specialist-card'>
              <img src={img4} alt='Tiago Pavan' />
              <span className='name'>Tiago Pavan</span>
              <span className='position'>Diretor Executivo</span>
              <p>Engenheiro, Pós Graduado em Administração de Empresas pela FGV, certificado pela FUNENSEG e registrado na SUSEP como Corretor de Seguros TODOS OS RAMOS.</p>
              <p>Profissional responsável por supervisionar todas as operações, funções e atividades da KING’S, especialista em seguros para Pessoa Jurídica (PJ) e Sinistros.</p>
            </div>
            <div className='specialist-card'>
              <img src={img5} alt='Caetano Panobianco' />
              <span className='name'>Caetano Panobianco</span>
              <span className='position'>Diretor Geral</span>
              <p>Administrador de Empresas e Contador (Ciências Contábeis).</p>
              <p>Profissional atuante há 10 anos no ramo de seguros com ênfase na área de seguros auto (veículos automotores em geral, carros de passeio, caminhões de todos os portes, ônibus, vans, motos e frotas).</p>
            </div>
          </div>
      </section>
      <Footer />
    </div>
  )
}

export default Assistencia24h