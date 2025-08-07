import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout.tsx'

import HomePage from './pages/HomePage.tsx'

function App() {
  

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
