import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Header(){
    const location = useLocation()

return (
    <header className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
            <Link to="/" className="flex items-center">
            <div className="w-2 h-0.5 bg-black "></div>
            <span className="ml-2 text-xl font-bold text-gray-900">Passa a Bola</span>
            </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
            <Link to="/jogadoras" className="text-gray-600 hover:text-pink-500 transition-colors">
            Jogadoras
            </Link>
            <Link to="/clubes" className="text-gray-600 hover:text-pink-500 transition-colors">
            Clubes
            </Link>
            <Link to="/torneios" className="text-gray-600 hover:text-pink-500 transition-colors">
            Torneios
            </Link>
            <Link to="/estatisticas" className="text-gray-600 hover:text-pink-500 transition-colors">
            Estatísticas
            </Link>
            <Link to="/sobrenos" className="text-gray-600 hover:text-pink-500 transition-colors">
            Sobre Nós
            </Link>
        </nav>
        </div>
    </div>
    </header>
)
}
