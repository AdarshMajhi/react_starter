import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Noob from './noob.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Noob/> */}
  </StrictMode>,
)
