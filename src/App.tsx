import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ParaVoce from './pages/ParaVoce';
import ParaEmpresa from './pages/ParaEmpresa';
import SobreNos from './pages/SobreNos';
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
import SeguroEmpresarial from './pages/para_empresa/SeguroEmpresarial';
import SeguroAutoFrotas from './pages/para_empresa/SeguroAutoFrotas';
import SeguroCondominio from './pages/para_empresa/SeguroCondominio';
import SeguroTransporte from './pages/para_empresa/SeguroTransporte';

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
          
        </Routes>
      </Router>
    </>
  )
}

export default App;