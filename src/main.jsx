import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Deck from './Deck.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Deck />
  </React.StrictMode>
)
