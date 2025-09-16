import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Jogadoras from './pages/Jogadoras'
import Clubes from './pages/Clubes'
import Torneios from './pages/Torneios'
import Estatisticas from './pages/Estatisticas'
import SectionCard from './components/SectionCard'  
import PerfilJogadora from './pages/PerfilJogadora'
import Cadastro from './pages/Cadastro'
import Sobrenos from './pages/Sobrenos'

export default function App(){
  return (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/jogadoras" element={<Jogadoras/>} />
          <Route path="/clubes" element={<Clubes/>} />
          <Route path="/torneios" element={<Torneios/>} />
          <Route path="/estatisticas" element={<Estatisticas/>} />
          <Route path="/sectioncard" element={<SectionCard/>} />
          <Route path="/jogadora/:id" element={<PerfilJogadora/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/sobrenos" element={<Sobrenos/>} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)
}
