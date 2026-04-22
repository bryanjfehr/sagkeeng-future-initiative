/**
 * Sagkeeng Future Initiative SPA
 * © 2026 Sagkeeng Future Initiative.
 * Licensed under MIT and Proprietary Community License.
 * 
 * Transparency • Accountability • Prosperity
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
