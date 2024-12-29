import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter} from 'react-router-dom'
import StoreContextprovider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StoreContextprovider>
      <App />
    </StoreContextprovider>
    </BrowserRouter>
  </StrictMode>,
)
