import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const statsData = [
{ name: 'Jogadoras', quantidade: 500, cor: 'black' },
{ name: 'Clubes', quantidade: 50, cor: 'black' },
{ name: 'Torneios', quantidade: 25, cor: 'black' },
];

const topClubsData = [
{ name: 'Palmeiras', vitorias: 12 },
{ name: 'São Paulo', vitorias: 10 },
{ name: 'Mirassol', vitorias: 8 },
{ name: 'Ferroviária', vitorias: 7 },
{ name: 'Santos', vitorias: 5 },
];

function Estatisticas() {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4 sm:p-8 md:p-12">
    <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center  bg-clip-text bg-gradient-to-r text-black">
        Estatísticas
        </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statsData.map((stat) => (
            <div key={stat.name} className="bg-pink-100 p-6 rounded-lg shadow-xl text-center border border-zinc-700">
            <p className="text-5xl font-bold mb-2" style={{ color: stat.cor }}>
                {stat.quantidade}+
            </p>
            <p className="text-lg text-zinc-400 font-semibold">{stat.name}</p>
            </div>
        ))}
        <div className="bg-pink-100 p-6 rounded-lg shadow-xl text-center border border-zinc-700">
            <p className="text-5xl font-bold mb-2 text-black">1000+</p>
            <p className="text-lg text-zinc-400 font-semibold">Conexões</p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-pink-100 p-6 rounded-lg shadow-xl border border-zinc-700">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Top 5 Clubes por Vitórias</h2>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topClubsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" stroke="black" />
                <YAxis stroke="black" />
                <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
                <Bar dataKey="vitorias" fill="#fda5d5" />
            </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="bg-pink-100 p-6 rounded-lg shadow-xl border border-zinc-700">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Estatísticas Gerais</h2>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" stroke="black" />
                <YAxis stroke="black" />
                <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
                <Bar dataKey="quantidade" fill="#fda5d5" />
            </BarChart>
            </ResponsiveContainer>
        </div>

        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-xl border border-zinc-700">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Estatísticas Adicionais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pink-100 p-4 rounded-md">
            <p className="text-black font-semibold mb-2">Engajamento da Comunidade</p>
            <div className="w-full bg-zinc-700 rounded-full h-2.5">
                <div className="bg-pink-300 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-black mt-1">75% dos usuários estão ativos</p>
            </div>
        </div>
        </div>
    </div>
    </div>
);
}

export default Estatisticas;