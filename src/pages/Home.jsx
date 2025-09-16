// src/pages/Home.jsx
import React from 'react';

function Home() {
return (
    <main className="bg-white min-h-screen">
      {/* Hero Section - Tela Cheia */}
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo (coloque a URL da sua imagem aqui) */}
        <div className="absolute inset-0 z-0">
        <img
            src="https://images.unsplash.com/photo-1543351611-58f69d7c24f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fundo de futebol feminino"
            className="w-full h-full object-cover"
        />
          {/* Camada de sobreposição com gradiente escuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/80"></div>
        </div>
        
        {/* Conteúdo do Hero - Centralizado e Chamativo */}
        <div className="relative z-10 text-center text-black px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-wide mb-6">
            Conectando o Futuro do Futebol Feminino
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold max-w-2xl mx-auto mb-8 text-zinc-700">
            Uma plataforma de networking para jogadoras, clubes e torneios. Encontre talentos, divulgue seu time e impulsione sua carreira.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-pink-300 text-black text-lg font-semibold rounded-full shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105 border border-black" onClick={()=>window.location.href='/clubes'}>
            Cadastrar Clube
            </button>
            <button className="px-8 py-4 bg-transparent text-black text-lg font-semibold rounded-full border border-black hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105 "onClick={()=>window.location.href='/cadastro'}>
            Criar Conta
            </button>
        </div>
        </div>
    </section>

      {/* Seção de Destaques - Visual Aprimorado */}
    <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text bg-gradient-to-r text-black">
            Nossos Diferenciais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Cartão de Destaque */}
            <div className="bg-pink-200 p-6 rounded-lg shadow-xl border border-zinc-700 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <div className="text-4xl text-blue-400 mb-4">
                <i className="fas fa-user-circle"></i> {/* Ícone de exemplo, você pode usar um de uma biblioteca */}
            </div>
            <h3 className="text-xl font-bold mb-2">Perfis Profissionais</h3>
            <p className="text-sm text-zinc-700">
                Cadastro completo de jogadoras com histórico, posição e estatísticas de desempenho.
            </p>
            </div>

            {/* Cartão de Destaque */}
            <div className="bg-pink-200 p-6 rounded-lg shadow-xl border border-zinc-700 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <div className="text-4xl text-blue-400 mb-4">
                <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Busca Inteligente</h3>
            <p className="text-sm text-zinc-700">
                Encontre o talento certo para seu clube com filtros avançados por posição, idade e localização.
            </p>
            </div>

            {/* Cartão de Destaque */}
            <div className="bg-pink-200 p-6 rounded-lg shadow-xl border border-zinc-700 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <div className="text-4xl text-blue-400 mb-4">
                <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Análise de Dados</h3>
            <p className="text-sm text-zinc-700">
                Acesse estatísticas detalhadas sobre o desempenho de jogadoras e a evolução dos clubes.
            </p>
            </div>

            {/* Cartão de Destaque */}
            <div className="bg-pink-200 p-6 rounded-lg shadow-xl border border-zinc-700 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <div className="text-4xl text-blue-400 mb-4">
                <i className="fas fa-calendar-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Agenda de Torneios</h3>
            <p className="text-sm text-zinc-700">
                Mantenha-se atualizado sobre os próximos torneios e eventos do futebol feminino.
            </p>
            </div>

        </div>
        </div>
    </section>
    </main>
);
}

export default Home;