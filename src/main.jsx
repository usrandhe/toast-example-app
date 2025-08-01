import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastProvider } from 'react-simple-notifications';
import 'react-simple-notifications/dist/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ToastProvider position="bottom-right" maxToasts={5}>
      <App />
    </ToastProvider>
  </StrictMode>,
)
