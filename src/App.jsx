// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrendingSection from './components/TrendingSection'
import ReasonsSection from './components/ReasonsSection'
import FilmDetail from './pages/FilmDetail'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection />
            <TrendingSection />
            <ReasonsSection />
          </>
        } />
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App