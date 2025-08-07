import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout.tsx'

import HomePage from './pages/HomePage.tsx'
import GalleryPage from './pages/GalleryPage.tsx'
import DiaryPage from './pages/DiaryPage.tsx'
import TipsPage from './pages/TipsPage.tsx'
import UploadPage from './pages/UploadPage.tsx'
import AboutPage from './pages/AboutPage.tsx'

function App() {
  

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
