import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import ParaVoce from './pages/ParaVoce'
import ParaEmpresa from './pages/ParaEmpresa'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ParaEmpresa />
  </React.StrictMode>
)
