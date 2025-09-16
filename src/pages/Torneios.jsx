import React from "react";
import { Calendar, Users } from "lucide-react"; 


export default function Torneios() {
const torneios = [
    {
    titulo: "Copa São Paulo Feminina",
    descricao: "Inscrições abertas — prazo final em 10/10/2025",
    acao: "Inscrever Time",
    destaque: true,
    },
    {
    titulo: "Campeonato Paulista Sub-20",
    descricao: "Convidados e classificação",
    acao: "Ver Regulamento",
    destaque: false,
    },
];

return (
    <main className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">
    <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Título */}
        <h2 className="text-3xl font-bold text-darkNavy flex items-center gap-2">
        <Calendar className="w-7 h-7 text-primaryPink" />
        Torneios
        </h2>
        <p className="text-slate-600 mt-2 text-lg">
        Gerencie torneios, veja calendário e inscrições.
        </p>

        {/* Cards */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {torneios.map((torneio, i) => (
            <article
            key={i}
            className={`rounded-2xl shadow-md p-6 border hover:shadow-xl transition bg-white ${
                torneio.destaque ? "border-primaryPink" : "border-slate-200"
            }`}
            >
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-darkNavy">
                {torneio.titulo}
                </h3>
                <Users className="w-5 h-5 text-slate-500" />
            </div>

            <p className="text-sm text-slate-600 mt-3">
                {torneio.descricao}
            </p>

            <div className="mt-6">
                <button
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                    torneio.destaque
                    ? "bg-white text-black hover:bg-pink-300 border border-black"
                    : "border border-slate-300 hover:bg-slate-100"
                }`}
                >
                {torneio.acao}
                </button>
            </div>
            </article>
        ))}
        </section>
    </div>
    </main>
);
}