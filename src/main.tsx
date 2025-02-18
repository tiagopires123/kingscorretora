import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-M5BNH86T'
}
 
TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
