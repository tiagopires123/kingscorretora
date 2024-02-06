import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/Slice21.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/Slice22.png'
import img2 from '../../assets/images/Slice23.png'
import img3 from '../../assets/images/Slice24.png'
import img4 from '../../assets/images/Slice25.png'
import img5 from '../../assets/images/Slice26.png'
import img6 from '../../assets/images/Slice27.png'



import './../Home.css'
import './../SobreNos.css'

function SeguroAgro() {
  return (
    <div>
      <Header />
      <div className='banner'>
        <img src={banner} alt='pessoas felizes no trabalho' />
        <div className='container'>
          <div className='title'>
            <h1>SEGURO AGRO</h1>
            <p>O Seguro Rural, mais especificamente o Seguro Agrícola, é o ramo de seguro sujeito ao maior número de riscos e é o de maior dificuldade de precificação.</p>
            <BannerButtons />
          </div>
        </div>
      </div>

      <div className='main-container'>
        <section className='section-container'>
          <div className='box first'>
            <img src={img1} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Modalidades do Seguro Rural ou Agrícola</h2>
              <p>O Seguro Rural possui peculiaridades que o diferem dos demais ramos de seguros. A principal delas é a ocorrência cíclica dos eventos meteorológicos, que variam no decorrer dos anos.</p>
              <p>Com isso, para a precificação correta desse tipo de seguro e para a mensuração do risco, não bastam conhecimentos estatísticos e atuariais, mas há, também, a necessidade de utilização de pesquisas agronômicas.</p>
              <ul>
                <li>Seguro Agrícola;</li>
                <li>Seguro Granizo X Seguro Multirrisco;</li>
                <li>Seguro de Animais;</li>
                <li>Seguro Pecuário;</li>
                <li>Seguro Aquícola;</li>
                <li>Seguro de Benfeitorias e Produtos Agropecuários;</li>
                <li>Seguro de Penhor Rural;</li>
                <li>Seguro de Florestas;</li>
                <li>Seguro de Cédula do Produto Rural – CPR;</li>
                <li>Seguro de Vida do Produtor Rural.</li>
              </ul>
            </div>
          </div>

          <div className='box'>
            <div className='box-text full'>
              <h2>Conhecendo Mais </h2>
              <p>Como o mercado está mudando, novas transações deverão exigir desenhos alternativos na transferência de riscos e compensação de prejuízos. Embora já existam várias formas de comercialização, as que se encontram mais presentes no mercado são:</p>
              <ul>
                <li>Seguros de Custos (ou de Custeio) – o objeto do seguro é a indenização da despesa de custeio da safra, do preparo do solo à colheita. Esse seguro permite que, sobrevindo o sinistro, o agricultor tenha recursos para o replantio (se a indenização ocorrer em tempo hábil) ou, pelo menos, possa manter-se na atividade.</li>
                <li>Seguro de Rendimento – o objeto do seguro é a indenização da perda de receita do agricultor por hectare cultivado. A perda de receita é a diferença entre a receita esperada e a receita efetiva, obtida por ocasião da venda. A receita esperada depende da produtividade física da lavoura (toneladas ou sacas por hectare) e também do preço do produto, e ambos têm um forte componente aleatório. A receita esperada é, portanto, o produto de uma promessa tecnológica (a produção futura) pelo preço futuro do bem que vier a ser colhido. O ressarcimento é baseado no valor das perdas que podem decorrer, tanto do risco físico da produção quanto do risco de mercado.</li>
                <li>Seguro de Índice – o objeto do seguro é a indenização da perda de produtividade, associada a um indicador regional. A perda é estimada através de um índice que determina a quebra de produtividade (toneladas ou sacas por hectare) da região. A quebra é determinada pelo confronto das produtividades estimada e efetiva.</li>
              </ul>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Seguro de Granizo × Seguro Multirrisco</h2>
              <p>Existem, atualmente no Brasil, dois tipos de cobertura disponíveis para contratação – Seguro de Granizo e Multirrisco – as quais, são linhas de Seguro Agrícola que já se encontram bem estabelecidas.</p>
              <p>Uma das mais antigas linhas de Seguro Agrícola é o Seguro de Granizo, que cobre perdas ocasionadas por tempestade de granizo, cuja apólice padrão indeniza um valor de cobertura por unidade segurada, aliado a um dedutível mínimo.</p>
              <p> Já os programas de Multirrisco preveem cobertura para causas não evitáveis de perda de produção, em especial os casos de clima adverso (seca, chuvas excessivas, geadas, incêndio, raio, tromba-d’água, ventos fortes).</p>
              <p> A alta exposição de Multirrisco se reflete no preço: são cobradas altas taxas e aplicados altos dedutíveis (Franquias e Participação Obrigatória do Segurado – POS).</p>
            </div>
            <img src={img2} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
            <img src={img3} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Seguro Agrícola</h2>
              <p>Esse seguro cobre as explorações agrícolas contra perdas decorrentes de fenômenos meteorológicos.</p>
              <p>Também cobre basicamente a vida da planta, desde a sua emergência ou floração até a colheita, contra um ou vários riscos de origem climática, como incêndio e raio, tromba-d’água, ventos fortes, granizo, geada, chuvas excessivas, seca e variação excessiva de temperatura, dependendo da forma de comercialização.</p>
              <p>Algumas seguradoras também cobrem danos decorrentes de doenças e/ou pragas, desde que não existam métodos difundidos de combate, controle ou profilaxia.</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text full'>
              <h2>Seguro Aquícola</h2>
              <p>Esse seguro garante indenização por morte de animais aquáticos (peixes, crustáceos) em consequência de acidentes e doenças.</p>
              <p>O termo aquicultura pode ser definido como a produção de organismos aquáticos vivos em cativeiro.</p>
              <p>A aquicultura comercial é uma das classes de negócio agrícola mais recentes.</p>
              <p> Novas técnicas e materiais estão permitindo que esse setor se desenvolva por todo o mundo, desde mar aberto até lagos ou fazendas agrícolas distantes de rios, cuja produção fica altamente exposta.</p>
              <p>Existem coberturas all risks ou riscos nomeados, dependendo da situação e das exigências do ressegurador. No Brasil, a cobertura mais comum é a de Riscos Nomeados.</p>
              <p> Os riscos cobertos, normalmente, incluem tempestades, marés, avalanches, deslizamentos, inundação, danos por excesso de chuva, algas, poluição, pestes, roubo, colisão, doenças e outros riscos naturais.</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Seguro de Animais</h2>
              <p>O Seguro Animais é aquele que tem por objetivo garantir o pagamento de indenização em caso de morte de animais de elite.</p>
              <p>Entende-se como animal de elite aquele destinado à participação em torneios, provas esportivas e exposições, bem como o animal destinado exclusivamente à coleta de sêmen e transferência de embriões para fins comerciais.</p>
            </div>
            <img src={img6} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box'>
          <img src={img5} alt='jato de negócios voando sobre as nuvens' />
            <div className='box-text'>
              <h2>Seguro Pecuário</h2>
              <p>Esse seguro garante indenização por morte de animais (bovinos, equinos, ovinos, caprinos, suínos) em consequência de acidentes e doenças.</p>
              <p>Também tem o objetivo de garantir o pagamento de indenização em caso de morte de animal destinado, exclusivamente, ao consumo, produção, cria, recria, engorda ou trabalho por tração.</p>
              <p>Os animais destinados à reprodução por monta natural, coleta de sêmen ou transferência de embriões – exclusivamente com a finalidade de incremento e/ou melhoria de plantéis próprios de animais de produção – estão, igualmente, enquadrados na modalidade de Seguro Pecuário.</p>
            </div>
          </div>


          <div className='box'>
            <div className='box-text'>
              <h2>Seguro de Benfeitorias e Produtos Agropecuários</h2>
              <p>Esse seguro garante todo o patrimônio nos limites da propriedade, cobrindo construções, instalações ou equipamentos fixos, produtos agropecuários depois de removidos do campo de colheita ou estocados, produtos pecuários, veículos rurais mistos ou de carga, máquinas agrícolas e seus implementos contra os riscos de incêndio, raio ou explosão, ventos fortes, impacto de veículo de qualquer espécie, desmoronamento, roubo ou furto.</p>
              <p>As coberturas podem, entretanto, variar conforme a maneira de comercialização, sendo, em geral, necessária vistoria prévia para a aceitação dos riscos.</p>
            </div>
            <div className='box-text'>
              <h2>Seguro de Penhor Rural</h2>
              <p>Esse seguro destina-se a preservar os bens dados em garantia nas operações de crédito rural, estendendo sua proteção às benfeitorias, máquinas, veículos e implementos utilizados na atividade rural, bem como produtos agropecuários já colhidos.</p>
            </div>
          </div>

          <div className='box'>
            <div className='box-text'>
              <h2>Seguro de Florestas</h2>
              <p>Esse seguro garante cobertura aos custos de reposição de florestas em formação ou de seu valor comercial, quando se tratar de florestas já formadas ou naturais, contra as perdas decorrentes de incêndio, eventos biológicos e meteorológicos.</p>
              <p>Para a definição do valor de cobertura (LMR) existem duas metodologias de cálculo: florestas em formação e florestas já formadas.</p>
              <p>  No primeiro caso, as coberturas podem se estender do custo de implantação, acrescido de custeio anual para a sua manutenção, visando à reposição de florestas em formação. No caso de florestas já formadas (ou naturais), o valor de cobertura deve ser determinado pelo próprio valor comercial da floresta.</p>
            </div>
            <img src={img4} alt='jato de negócios voando sobre as nuvens' />
          </div>

          <div className='box last'>
            <div className='box-text'>
              <h2>Seguro de Cédula do Produto Rural – CPR</h2>
              <p>A CPR é um título emitido pelo produtor rural que vende a termo sua produção agropecuária, recebe o valor da venda no ato da formalização do negócio e se compromete a entregar o produto vendido na quantidade, qualidade, local e data estipulados no título, garantindo ao último credor titular da CPR, desde que não seja o emitente ou seu avalista (segurado), o fiel cumprimento das obrigações contratuais assumidas pelo produtor (tomador) na cédula.</p>
            </div>
            <div className='box-text'>
              <h2>Seguro de Vida do Produtor Rural</h2>
              <p>Esse seguro é destinado ao produtor rural que seja devedor de crédito rural junto a uma instituição financeira e terá sua vigência limitada ao período do financiamento, sendo que o beneficiário será o agente financiador.</p>
              <p>Serve para amortizar ou liquidar as operações de crédito rural desse produtor rural, contratadas junto a um agente financiador, em caso de morte do segurado.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default SeguroAgro