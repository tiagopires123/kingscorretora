import Header from '../../components/Header'
import Footer from '../../components/Footer'

import banner from '../../assets/images/maqbanner.png'
import BannerButtons from '../../components/BannerButtons'

import img1 from '../../assets/images/slice-9-24.png'
import img2 from '../../assets/images/slice-11-24.png'
import img3 from '../../assets/images/Slice-10-24.png'
import img4 from '../../assets/images/Slice-12-24.png'
import img5 from '../../assets/images/Slice-13-24.png'

import Benefits from '../../components/Benefits'

import './../Home.css'

function SeguroMaquinasEquipamentos() {
  return (
    <div>
        <Header />
            <div className='banner'>
                <img src={banner} alt='pessoas felizes no trabalho' />
                <div className='container'>
                    <div className='title'>
                        <h1>Seguro Máquinas e Equipamentos</h1>
                        <p>Há uma grande variedade de equipamentos utilizados para os mais diversos fins na indústria mecânica, na construção civil e nas mais diversas atividades produtivas,</p>
                        <BannerButtons />
                    </div>
                </div>
            </div>

            <div className='main-container'>
                <section className='article section-container'>
                    <div className='box first'>
                        <img src={img1} alt='Equipamentos' />
                        <div className='box-text'>
                            <h2>SEGUROS PARA EQUIPAMENTOS NÃO AGRÍCOLAS </h2>
                            <p>Há uma grande variedade de equipamentos utilizados para os mais diversos fins na indústria mecânica, na construção civil e nas mais diversas atividades produtivas, dentre eles estando:</p>
                            <ul>
                                <li>unidades de tração (tratores);</li>
                                <li>unidades escavo-empurradoras;</li>
                                <li>unidades escavo-transportadoras;</li>
                                <li>unidades escavo-carregadoras;</li>
                                <li>unidades aplanadoras;</li>
                                <li>unidades de transportes; e</li>
                                <li>unidades compactadoras.</li>
                            </ul>
                            <p>As mesmas Condições Gerais se aplicam a todos os equipamentos, variando, no entanto, de acordo com as modalidades específicas.</p>
                        </div>
                    </div>

                <div className='box'>
                    <div className='box-text'>
                        <h2>SEGUROS PARA EQUIPAMENTOS  AGRÍCOLAS</h2>
                        <p> São seguráveis os bens diretamente relacionados às atividades agrícola, pecuária e florestal, que não tenham sido oferecidos em garantia de operações de crédito rural ou penhor rural. Poderão ser segurados os seguintes bens:</p>
                        <ul>
                            <li>máquinas, equipamentos e implementos autopropulsores, rebocáveis, móveis ou estacionários;</li>
                            <li>veículos rurais de carga.</li>
                        </ul>
                    </div>
                    <img src={img2} alt='Equipamentos' />
                </div>

                <div className='box'>
                    <img src={img3} alt='Equipamentos' />
                    <div className='box-text'>
                        <h2>SEGUROS PARA EQUIPAMENTOS  AGRÍCOLAS - Penhor Rural</h2>
                        <p>O seguro de penhor rural garante, nos termos das Condições Gerais e das demais condições da apólice, até os Limites Máximos de Indenização das coberturas especificadas na mesma e respeitado o seu Valor em Risco, o pagamento de indenização ao segurado, ou ao beneficiário indicado, por prejuízos consequentes de perdas e danos de origem súbita, imprevista e acidental, diretamente decorrentes dos riscos especificados como cobertos em alguma das coberturas contratadas. Bens Seguráveis:</p>
                        <p> Este seguro destina-se a conceder cobertura a máquinas e equipamentos de utilização agrícola, florestal, aquícola e agropecuária, oferecidos em garantia de operações de crédito rural, cujo agente seja instituição financeira, conforme as modalidades a seguir:</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-text'>
                        <p>a) equipamentos estacionários – são as máquinas e/ou equipamentos industriais e comerciais de “tipo fixo” quando instalados para operação permanente em local determinado, de propriedade ou sob controle do arrendatário ou cessionário, expressamente indicado na apólice; e</p>
                        <p>a) equipamentos estacionários – são as máquinas e/ou equipamentos industriais e comerciais de “tipo fixo” quando instalados para operação permanente em local determinado, de propriedade ou sob controle do arrendatário ou cessionário, expressamente indicado na apólice; e</p>
                        <ul>
                            <li>unidades de tração (tratores);</li>
                            <li>unidades escavo-empurradoras;</li>
                            <li>unidades escavo-transportadoras;</li>
                            <li>unidades escavo-carregadoras;</li>
                            <li>unidades aplanadoras;</li>
                            <li>unidades de transportes; e</li>
                            <li>unidades compactadoras.</li>
                        </ul>
                        <p> As mesmas Condições Gerais se aplicam a todos os equipamentos, variando, no entanto, de acordo com as modalidades específicas.</p>
                    </div>
                    <img src={img4} alt='Equipamentos' />
                </div>

                <div className='box last'>
                    <div className='box-text'>
                        <h2>SEGURO DE CRÉDITO</h2>
                        <p>O Seguro de Crédito Rural ou Crédito é uma modalidade de seguro que tem por objetivo ressarcir o segurado (credor), nas operações de crédito realizadas dentro do território nacional, das perdas líquidas definitivas causadas por devedor insolvente.</p>
                        <p>Em outras palavras, o objetivo do Seguro de Crédito é garantir ao segurado (credor) as perdas líquidas definitivas resultantes do não recebimento de valores relativos às operações de crédito realizadas pelo credor aos seus diversos clientes (devedores).</p>
                        <p>O Seguro de Crédito sempre pressupõe a participação do credor nas perdas. Sendo assim, a indenização contemplará somente parte do crédito,descontando-se, eventualmente, valores pagos antecipadamente.</p>
                        <ul>
                            <li>máquinas, equipamentos e implementos autopropulsores, rebocáveis, móveis ou estacionários;</li>
                            <li>veículos rurais de carga.</li>
                        </ul>
                    </div>
                    <img src={img5} alt='Equipamentos' />
                </div>
            </section>
            <Benefits />
        </div>
        <Footer />
    </div>
  )
}

export default SeguroMaquinasEquipamentos