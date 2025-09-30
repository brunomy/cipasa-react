import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Layout/Header/Header'
import Layout from './components/Layout/Layout'
import { Box } from '@mui/material'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
