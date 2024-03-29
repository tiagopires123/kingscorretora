import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ParaVoce from './pages/ParaVoce';
import ParaEmpresa from './pages/ParaEmpresa';
import SobreNos from './pages/SobreNos';
import Assistencia24h from './pages/Assistencia24h';

import SeguroAuto from './pages/para_voce/SeguroAuto';
import SeguroResidencial from './pages/para_voce/SeguroResidencial';
import SeguroViagem from './pages/para_voce/SeguroViagem';
import SeguroVida from './pages/para_voce/SeguroVida';
import SeguroNautico from './pages/para_voce/SeguroNautico';
import SeguroRespCivil from './pages/para_voce/SeguroRespCivil';
import SeguroBike from './pages/para_voce/SeguroBike';
import SeguroPet from './pages/para_voce/SeguroPet';
import SeguroEquipamentos from './pages/para_voce/SeguroEquipamentos';
import SeguroAgro from './pages/para_voce/SeguroAgro';
import SeguroAereo from './pages/para_voce/SeguroAereo';
import SeguroMaqEquipamento from './pages/para_voce/SeguroMaquinasEquipamentos';
import SeguroDiverso from './pages/para_voce/SeguroDiverso';

import SeguroEmpresarial from './pages/para_empresa/SeguroEmpresarial';
import SeguroAutoFrotas from './pages/para_empresa/SeguroAutoFrotas';
import SeguroCondominio from './pages/para_empresa/SeguroCondominio';
import SeguroTransporte from './pages/para_empresa/SeguroTransporte';
import SeguroGarantia from './pages/para_empresa/SeguroGarantia';
import SeguroVidaColetivo from './pages/para_empresa/SeguroVidaColetivo';
import SeguroImobiliario from './pages/para_empresa/SeguroImobiliario';
import SeguroRiscoEngenharia from './pages/para_empresa/SeguroEngenharia';


function App() {
  return (
    // Rotas
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/para_voce' element={<ParaVoce />} />
          <Route path='/para_empresa' element={<ParaEmpresa />} />
          <Route path='/sobre_nos' element={<SobreNos />} />
          <Route path='/assistencia24h' element={<Assistencia24h />} />

          <Route path='/seguro_auto' element={<SeguroAuto />} />
          <Route path='/seguro_residencial' element={<SeguroResidencial />} />
          <Route path='/seguro_vida' element={<SeguroVida />} />
          <Route path='/seguro_viagem' element={<SeguroViagem />} />
          <Route path='/seguro_nautico' element={<SeguroNautico />} />
          <Route path='/seguro_resp_civil' element={<SeguroRespCivil />} />
          <Route path='/seguro_bike' element={<SeguroBike />} />
          <Route path='/seguro_pet' element={<SeguroPet />} />
          <Route path='/seguro_equipamentos' element={<SeguroEquipamentos />} />
          <Route path='/seguro_agro' element={<SeguroAgro />} />
          <Route path='/seguro_aereo' element={<SeguroAereo />} />

          <Route path='/seguro_empresarial' element={<SeguroEmpresarial />} />
          <Route path='/seguro_auto_e_frotas' element={<SeguroAutoFrotas />} />
          <Route path='/seguro_condominio' element={<SeguroCondominio />} />
          <Route path='/seguro_transporte' element={<SeguroTransporte />} />
          <Route path='/seguro_garantia' element={<SeguroGarantia />} />
          <Route path='/seguro_vidacoletivo' element={<SeguroVidaColetivo />} />
          <Route path='/seguro_imobiliario' element={<SeguroImobiliario />} />
          <Route path='/seguro_risco_engenharia' element={<SeguroRiscoEngenharia />} />
          <Route path='/seguro_maquinas_equipamentos' element={<SeguroMaqEquipamento />} />
          <Route path='/seguros_diversos' element={<SeguroDiverso />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App;