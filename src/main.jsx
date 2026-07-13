import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/splitText.css'
import App from './App.jsx'
import './styles/no-dividers.css'
import './styles/always-visible.css'
import './styles/experience-editorial.css'
import './styles/achievements-editorial.css'
import './styles/about-editorial.css'
import './styles/contact-editorial.css'
import './styles/font-scale.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
