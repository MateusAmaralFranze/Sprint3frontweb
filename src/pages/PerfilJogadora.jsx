import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PerfilJogadora() {
const { id } = useParams()
const [jogadora, setJogadora] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
    fetch(`http://localhost:5000/api/jogadoras/${id}`)
    .then(res => {
        if (!res.ok) throw new Error('Jogadora não encontrada')
        return res.json()
    })
    .then(data => {
        setJogadora(data)
        setLoading(false)
    })
    .catch(err => {
        setError(err.message)
        setLoading(false)
    })
}, [id])

if (loading) return <p>Carregando...</p>
if (error) return <p className="text-red-500">{error}</p>
if (!jogadora) return <p>Jogadora não encontrada.</p>

return (
    <main className="bg-white min-h-screen">
    <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-darkNavy">{jogadora.nome}</h2>
        <p className="text-slate-600">{jogadora.posicao} • {jogadora.idade} anos • {jogadora.cidade}</p>
        <section className="mt-6">
        <h3 className="font-semibold text-lg mb-2">História</h3>
        <p className="text-slate-600">{jogadora.historia}</p>
        </section>
        <section className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Carreira</h3>
        <p className="text-slate-600">{jogadora.carreira}</p>
        </section>
    </div>
    </main>
)
}