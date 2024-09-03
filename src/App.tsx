// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { AuthProvider } from "./Components/AuthContext"
import { Layout } from "./Components/Layout";
import { Home } from "./Pages/Home";

function App() {
  // const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
