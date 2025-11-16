import ReactDOM from 'react-dom/client'
import Login from './login/Login'
import Signup from './login/Signup'
import Dashboard from './dashboard/Dashboard'
import LandingPage from './lading/LandingPage'
import NotFound from './general/NotFound'
import PrivateRoute from './general/PrivateRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { theme } from './lib/theme'
import './index.css'
import '@mantine/core/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </MantineProvider>
)
