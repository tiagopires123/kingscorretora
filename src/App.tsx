import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ParaVoce from './pages/ParaVoce';
import ParaEmpresa from './pages/ParaEmpresa';
import SobreNos from './pages/SobreNos';
import SeguroAuto from './pages/SeguroAuto';
import SeguroResidencial from './pages/SeguroResidencial';
import SeguroViagem from './pages/SeguroViagem';
import SeguroVida from './pages/SeguroVida';

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
        </Routes>
      </Router>
    </>
  )
}

export default App;