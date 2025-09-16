import React from 'react';
import SectionCard from '../components/SectionCard';
import { Link } from 'react-router-dom';

export default function Jogadoras() {
const mockJogadoras = [
    { nome: 'Gabriela Silva', posicao: 'Atacante', idade: 22, nivel: 'Profissional', resumo: 'Atacante com grande habilidade de finalização e visão de jogo.' },
    { nome: 'Ana Costa', posicao: 'Meio-campo', idade: 25, nivel: 'Experiente', resumo: 'Meio-campista criativa, com ótimo passe e controle de bola.' },
    { nome: 'Juliana Torres', posicao: 'Zagueira', idade: 28, nivel: 'Profissional', resumo: 'Zagueira forte e inteligente, com excelente posicionamento.' },
    { nome: 'Mariana Lima', posicao: 'Goleira', idade: 20, nivel: 'Iniciante', resumo: 'Jovem goleira com reflexos rápidos e potencial promissor.' },
    { nome: 'Isabela Santos', posicao: 'Lateral', idade: 24, nivel: 'Intermediário', resumo: 'Lateral ágil e com boa capacidade de cruzamento e defesa.' },
    { nome: 'Laura Fernandes', posicao: 'Meio-campo', idade: 27, nivel: 'Profissional', resumo: 'Líder em campo, com passes precisos e excelente controle de ritmo de jogo.' },
];

return (
    <main className="bg-white min-h-screen p-4 sm:p-8 md:p-12">
    <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-black">
        Jogadoras
        </h1>
        <p className="text-zinc-500 text-center mb-10">
        Encontre e filtre jogadoras por posição e habilidades.
        </p>

        {/* Seção de Filtros */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg border border-zinc-700 mb-10">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6" aria-label="Filtro de jogadoras">
            <label className="flex flex-col">
            <span className="text-sm font-medium text-black mb-1">Posição</span>
            <select className="w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black">
                <option>Qualquer</option>
                <option>Atacante</option>
                <option>Zagueira</option>
                <option>Meio-campo</option>
                <option>Goleira</option>
                <option>Lateral</option>
            </select>
            </label>
            <label className="flex flex-col">
            <span className="text-sm font-medium text-black mb-1">Cidade</span>
            <input 
                className="w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black" 
                placeholder="Cidade"
            />
            </label>
            <label className="flex flex-col">
            <span className="text-sm font-medium text-black mb-1">Nível</span>
            <select className="w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black">
                <option>Qualquer</option>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
                <option>Profissional</option>
            </select>
            </label>
            <div className="flex items-end">
            <button 
                type="submit" 
                className="w-full px-6 py-3 rounded-md bg-pink-300 text-black font-semibold hover:bg-white hover:text-black transition-colors hover:border-1 hover:border-black"
            >
                Buscar
            </button>
            </div>
        </form>
        </div>

        {/* Seção de Cartões das Jogadoras */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockJogadoras.map((jogadora, index) => (
            <article 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-xl border border-zinc-700 transition-transform transform hover:scale-105"
            >
            <header className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                    {/* Placeholder para a foto de perfil */}
                    <span className="text-3xl font-bold text-pink-700">{jogadora.nome[0]}</span>
                </div>
                <div>
                <h3 className="font-semibold text-xl text-black">{jogadora.nome}</h3>
                <p className="text-sm text-zinc-500">{jogadora.posicao} • {jogadora.idade} anos</p>
                </div>
            </header>
            <p className="mt-4 text-sm text-zinc-500 italic">
                "{jogadora.resumo}"
            </p>
            <div className="mt-6 flex gap-3">
                <Link to={`/jogadora/${index}`} className="flex-1 text-sm px-4 py-3 rounded-md bg-black text-white font-semibold text-center hover:bg-white transition-colors hover:text-black hover:border hover:border-black">
                Ver Perfil
                </Link>
                <button 
                className="flex-1 text-sm px-4 py-3 rounded-md bg-pink-300 text-black font-semibold hover:bg-white hover:text-black transition-colors hover:border-1 hover:border-black"
                >
                Conectar
                </button>
            </div>
            </article>
        ))}
        </section>
    </div>
    </main>
);
}