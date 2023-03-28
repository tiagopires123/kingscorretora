import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/banner-voce.jpg'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/equipamentos.jpg'

import './../Home.css'

function SeguroEquipamentos() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>Seguro Equipamentos Portáteis</h1>
            <p>Smartphones, notebooks, câmeras, filmadoras, Tablets e Smartwatches estão cada dia mais presentes em nosso dia a dia, seja para uso pessoal, profissional ou para lazer. O seguro para esses equipamentos portáteis é ideal para você que se locomove com frequência e não quer correr o risco de ficar sem sua ferramenta de trabalho e comunicação.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='article section-container'>
          <div className='box first'>
            <img src={img1} alt='Equipamentos' />
            <div className='box-text'>
              <h2>COBERTURA BÁSICA </h2>
              <p>Danos Físicos ao Bem (DFB) - Em decorrência de incêndio, raio ou explosão; impacto de veículos e na tentativa de roubo.</p>
            </div>
          </div>
          
          <div className='box last'>
            <div className='box-text'>
              <h2>COBERTURAS OPCIONAIS</h2>
              <p>Subtração do bem - Garante a subtração do equipamento, mediante o rompimento de obstáculo ou ameaça direta, exceto quando o equipamento for deixado em veículos.</p>
              <p>Danos por água/líquido - Garante ao segurado o pagamento por danos materiais, causados aos equipamentos, por conta de danos de origem acidental e involuntária por água ou qualquer substância líquida.</p>
              <p>Garantia Internacional - Contratada esta cobertura, o cliente terá extensão das garantias contratadas para sinistros ocorridos fora do Brasil.</p>
              <p>Danos Elétricos - Garante danos causados por oscilações e descargas elétricas de energia, além de curtos-circuitos que afetem o equipamento.</p>
              <p>Perda ou pagamento de aluguel* - Garante ao segurado, a perda ou o pagamento dos aluguéis dos equipamentos, caso estes sofram danos devidamente cobertos. *Exclusivamente para equipamentos cinematográficos</p>
            </div>
            <img src={img1} alt='Equipamentos' />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroEquipamentos