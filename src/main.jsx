import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='508048855866-ltg3aktb4ur77ep4lspro172kc208872.apps.googleusercontent.com'>
  <App />
  </GoogleOAuthProvider>
)
