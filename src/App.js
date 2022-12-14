import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"

import Login from "./components/Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        {/* <AuthProvider> */}
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  )
}

export default App
