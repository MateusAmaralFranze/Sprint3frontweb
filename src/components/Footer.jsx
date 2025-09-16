import React from 'react'
export default function Footer(){

return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-pink-300 "></div>
            <span className="ml-2 text-xl font-bold">Passa a Bola</span>
            </div>
            <p className="text-gray-400 text-sm">Conectando talentos do futebol feminino em todo o Brasil.</p>
        </div>

        <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-gray-400">
            <li>
                <a href="/jogadoras" className="hover:text-pink-400 transition-colors">
                Jogadoras
                </a>
            </li>
            <li>
                <a href="/clubes" className="hover:text-pink-400 transition-colors">
                Clubes
                </a>
            </li>
            <li>
                <a href="/torneios" className="hover:text-pink-400 transition-colors">
                Torneios
                </a>
            </li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
            <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                Perfil
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                Networking
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                Consultoria
                </a>
            </li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
            <li>
                <a href="#" className="hover:text-pink-300 transition-colors">
                Ajuda
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-pink-300 transition-colors">
                Contato
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-pink-300 transition-colors">
                Termos
                </a>
            </li>
            </ul>
        </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 Passa a Bola. Todos os direitos reservados.</p>
        </div>
    </div>
    </footer>
)
}
