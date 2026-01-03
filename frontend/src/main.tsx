import Login from './login/Login'
import Signup from './login/Signup'
import ReactDOM from 'react-dom/client'
import NotFound from './general/NotFound'
import Dashboard from './dashboard/Dashboard'
import LandingPage from './lading/LandingPage'
import PrivateRoute from './general/PrivateRoute'
import ResumeFromImport from './general/newResumes/ResumeFromImport'
import ResumeFromScratch from './general/newResumes/ResumeFromScratch'
import ResumeFromTemplate from './general/newResumes/ResumeFromTemplate'
import { theme } from './lib/theme'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        <Route
          path="/resume/new"
          element={
            <PrivateRoute>
              <ResumeFromScratch />
            </PrivateRoute>
          }
        />
        <Route
          path="/resume/import"
          element={
            <PrivateRoute>
              <ResumeFromImport />
            </PrivateRoute>
          }
        />
        <Route
          path="/resume/template"
          element={
            <PrivateRoute>
              <ResumeFromTemplate />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </MantineProvider>
)
