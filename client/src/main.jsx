import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/authContext.jsx'
import { ServiceProvider } from './store/serviceContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ServiceProvider>
          <App />
        </ServiceProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
