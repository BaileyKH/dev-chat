// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import { Layout } from "@/components/Layout.tsx";
import { Home } from "./Pages/Home";

import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './Pages/Dashboard/Dashboard';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
