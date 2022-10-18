import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ParaVoce from './pages/ParaVoce';
import ParaEmpresa from './pages/ParaEmpresa';
import SobreNos from './pages/SobreNos';

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
        </Routes>
      </Router>
    
    </>
  )
}

export default App;