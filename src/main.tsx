import './styles/globals.css'
import './lib/i18n.ts'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
