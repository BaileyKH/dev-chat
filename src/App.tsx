// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { AuthProvider } from "./Components/AuthContext"
import { Layout } from "@/components/Layout.tsx";
import { Home } from "./Pages/Home";
import { SignIn } from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<SignIn />}/>
            <Route path="/register" element={<SignUp />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
