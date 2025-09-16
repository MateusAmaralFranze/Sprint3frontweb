import React, { useState, useEffect } from 'react';

export default function Clubes() {
const [form, setForm] = useState({ nome: '', cidade: '', email: '', telefone: '' });
const [status, setStatus] = useState(null);
const [clubes, setClubes] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/api/club')
    .then(res => res.json())
    .then(data => setClubes(data))
    .catch(() => setStatus('Erro ao carregar clubes'));
}, []);

function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
}

async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Enviando...');
    try {
    const res = await fetch('http://localhost:5000/api/register-club', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    });
    if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Erro no servidor');
    }
    
    fetch('http://localhost:5000/api/clubes')
        .then(res => res.json())
        .then(data => setClubes(data));

    } catch (err) {
    setStatus('Erro ao cadastrar.');
    console.error(err);
    }
}

function handleCancel() {
    setForm({ nome: '', cidade: '', email: '', telefone: '' });
    window.location.href = '/';
}

return (
    <main className="bg-white text-black min-h-screen p-4 sm:p-8 md:p-12">
    <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-clip-text bg-gradient-to-r text-black0">
        Clubes
        </h1>
        <p className="text-zinc-400 text-center mb-10">Cadastre seu clube para participar de torneios e divulgá-lo.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-pink-100 p-6 rounded-lg shadow-xl border border-zinc-700 transition-transform transform hover:scale-105">
            <h3 className="font-semibold text-black mb-2">Sobre o cadastro</h3>
            <p className="text-sm text-zinc-400">Preencha os dados do clube. Após envio, o sistema salvará as informações.</p>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
                <span className="text-sm text-black">Nome do Clube</span>
                <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black"
                />
            </label>
            <label className="block">
                <span className="text-sm text-black">Cidade</span>
                <input
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black"
                />
            </label>
            <label className="block">
                <span className="text-sm text-black">Email</span>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black"
                />
            </label>
            <label className="block">
                <span className="text-sm text-black">Telefone</span>
                <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                className="mt-1 w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black"
                />
            </label>

            <div className="flex justify-end items-center gap-3 mt-4">
                <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 rounded-md bg-black text-white font-semibold hover:bg-white transition-colors hover:text-black  hover:border-1 hover:border-black"
                >
                Cancelar
                </button>
                <button
                type="submit"
                className="px-6 py-3 rounded-md bg-pink-300 text-black font-semibold hover:bg-white hover:text-black transition-colors hover:border-1 hover:border-black"
                >
                Cadastrar-se
                </button>
            </div>
            </form>
            {status && <p className="mt-4 text-sm text-zinc-500 text-center">{status}</p>}
        </div>

        <div className="bg-pink-100 p-6 rounded-lg shadow-xl border border-zinc-700">
            <h3 className="text-2xl font-bold mb-4 text-black">Clubes cadastrados</h3>
            {clubes.length === 0 ? (
            <p className="text-zinc-500 italic text-center">Nenhum clube cadastrado ainda.</p>
            ) : (
            <ul className="space-y-4">
                {clubes.map((clube, idx) => (
                <li
                    key={idx}
                    className="bg-white p-4 rounded-md border border-zinc-700 transition-colors hover:bg-pink-100"
                >
                    <p className="font-semibold text-lg text-black">{clube.nome}</p>
                    <p className="text-zinc-400 text-sm">{clube.cidade}</p>
                    <p className="text-zinc-400 text-sm">
                    </p>
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    </div>
    </main>
);
}