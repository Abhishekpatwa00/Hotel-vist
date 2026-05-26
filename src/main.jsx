import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
import { publishableKeyFromHost } from '@clerk/react/internal'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishableKey} afterSignOutUrl={"/"}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>,
)
