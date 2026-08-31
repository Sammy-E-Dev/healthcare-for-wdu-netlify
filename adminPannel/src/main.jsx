import { StrictMode } from 'react'
<<<<<<< HEAD
=======

>>>>>>> ca0e4dc50d35e287e6cdae3c7c8f3c14254d8e7f
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
<<<<<<< HEAD
import AdminContextProvider from './context/adminContext.jsx'
import DoctorContextProvider from './context/doctorContext.jsx'
import AppProviderContext from './context/AppContext.jsx'
=======
import AppContextProvider from './context.jsx'
>>>>>>> ca0e4dc50d35e287e6cdae3c7c8f3c14254d8e7f

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
<<<<<<< HEAD
      <AdminContextProvider>
        <DoctorContextProvider>
          <AppProviderContext>
            <App />
          </AppProviderContext>
        </DoctorContextProvider>
      </AdminContextProvider>
    </Router>
=======
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
    
>>>>>>> ca0e4dc50d35e287e6cdae3c7c8f3c14254d8e7f
  </StrictMode>,
)
