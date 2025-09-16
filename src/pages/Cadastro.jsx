import React, { useState, useEffect } from 'react';

export default function Cadastro() {
const [form, setForm] = useState({ nome: '', email: '', senha: '' });
const [status, setStatus] = useState(null);
const [cadastro, setCadastro] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/api/cadastro')
    .then(res => res.json())
    .then(data => setCadastro(data))
    .catch(() => setStatus('Erro ao carregar usuário'));
}, []);

function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
}

async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Enviando...');
    try {
    const res = await fetch('http://localhost:5000/api/register-cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
    });
    if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Erro no servidor');
    }
    

    fetch('http://localhost:5000/api/cadastro')
        .then(res => res.json())
        .then(data => setCadastro(data));

    } catch (err) {
    setStatus('Erro ao cadastrar.');
    console.error(err);
    }
}

function handleCancel() {
    setForm({ nome: '', email: '', senha: '' });
    window.location.href = '/';
}

return (
    <main className="bg-white text-white min-h-screen p-4 sm:p-8 md:p-12">
    <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center  bg-clip-text bg-gradient-to-r text-black">
        Cadastro
        </h1>
        <p className="text-black text-center mb-10">Se junte à maior plataforma de futebol feminino.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-pink-100 p-6 rounded-lg shadow-xl border border-zinc-700 transition-transform transform hover:scale-105">
            <h3 className="font-semibold text-black">Sobre o cadastro</h3>
            <p className="text-sm text-zinc-500">Preencha os seus dados. Após envio, o sistema salvará as informações.</p>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
                <span className="text-sm text-black">Nome de Usuário</span>
                <input
                name="nome"
                value={form.nome}
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
                <span className="text-sm text-black">Senha</span>
                <input
                type="senha"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                className="mt-1 w-full p-3 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black"
                />
            </label>

            <div className="flex justify-end items-center gap-3 mt-4">
                <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 rounded-md bg-black text-white font-semibold hover:bg-white transition-colors hover:text-black  hover:border-1 hover:border-black">
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
            <h3 className="text-2xl font-bold mb-4 text-black">Jogadoras cadastradas</h3>
            {cadastro.length === 0 ? (
            <p className="text-zinc-500 italic text-center">Nenhuma jogadora cadastrada ainda.</p>
            ) : (
            <ul className="space-y-4">
                {cadastro.map((cadastro, idx) => (
                <li
                    key={idx}
                    className="bg-white p-4 rounded-md border border-zinc-700 transition-colors hover:bg-pink-100"
                >
                    <p className="font-semibold text-lg text-black">{cadastro.nome}</p>
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