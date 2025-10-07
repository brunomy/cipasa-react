import { useState } from 'react'
import './App.scss'
import Header from './components/Layout/Header/Header'
import Layout from './components/Layout/Layout'
import { Box } from '@mui/material'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import Ventures from './pages/Ventures/Ventures'
import Venture from './pages/Venture/Venture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/empreendimentos" element={<Ventures />} />
        <Route path="/empreendimento/:id/:nome" element={<Venture />} />
      </Routes>
    </Layout>
  )
}

export default App
