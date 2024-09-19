// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import { Layout } from "@/components/Layout.tsx";
import { Home } from "./Pages/Home";

import { Register } from './Pages/Account/Register';
import { Login } from './Pages/Account/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { PasswordReset } from './Pages/Account/PasswordReset';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<PasswordReset />} />
          </Route>

          <Route path='/dashboard' element={<ProtectedRoute />}>
              <Route index element={<Dashboard />}/>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
