import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice15.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/petplanos.jpg'

import Benefits from '../../components/Benefits'

import './../Home.css'

function SeguroPet() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Pet</h1>
            <p>Os pets são tão especiais, que hoje os temos como se fossem membros da família, não é mesmo? Pensando nisso, a Health for Pet (produto Porto Seguro) oferece planos de saúde exclusivos para os nossos queridos cães e gatos, com atendimento personalizado, acesso à ampla rede credenciada e benefícios exclusivos.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='Pet planos' />
            <div className='box-text'>
              <h2>CONHECENDO MAIS </h2>
              <p>Ao aderir à Health for Pet, nossos clientes investem de forma planejada na qualidade de vida de seus melhores amigos.</p>
              <p>Conheça os produtos da Health for Pet, para pets com até 8 anos: Pet Basic, Pet Light, Pet Plus, Pet Total e Pet Premium, e para pets com 9 anos ou mais: Pet Senior (Produto disponível somente na cidade de São Paulo).</p>
              <p>A KING'S Corretora de Seguros em conjunto com a Porto Seguro ( Health for Pet ) realiza o seguro saúde do seu pet, seja ele felino ou canino! Para maiores informações e cotações entre em contato ou clique no "CONTRATAR AGORA" ao lado!</p>
            </div>
          </div>
          
          <div className='box last'>
            <div className='box-text'>
              <h2>VANTAGENS PARA O CLIENTE</h2>
              <p>1. Acesso imediato aos melhores prestadores de cuidados veterinários;</p>
              <p>2. Cobertura de exames, internações e tratamentos complexos;</p>
              <p>3. Aplicação das principais vacinas;</p>
              <p>4. Clínicas, hospitais, diagnósticos e profissionais especializados;</p>
              <p>5. Implantação de microchip para registro e acompanhamento do pet.</p>
            </div>
            <iframe width="560" height="315" src="https://video.wixstatic.com/video/603487_b97c98ff32c14ec8935f28839d3984a4/480p/mp4/file.mp4" title="Video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>    
          </div>
        </section>
        <Benefits />
      </div>
      <Footer />
    </div>
  )
}

export default SeguroPet