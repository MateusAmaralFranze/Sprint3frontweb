
import React from 'react';

function SobreNos() {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4 sm:p-8 md:p-12">
    <div className="max-w-4xl mx-auto text-center">
        

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-darkNavy ">
        Sobre Nós
        </h1>
        

        <p className="text-lg sm:text-xl text-black leading-relaxed mb-8">
        Somos uma equipe apaixonada e dedicada ao crescimento do futebol feminino no Brasil. Nossa missão é
        tornar o futebol feminino cada vez mais reconhecido no país, utilizando nossas redes e sites.
        </p>


        <div className="bg-pink-100 rounded-lg shadow-xl p-6 sm:p-8 mb-8 border border-zinc-700 transition-transform transform hover:scale-105">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Nossa História</h2>
        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            Tudo começou em **[ano de fundação]** com a simples ideia de **[a ideia inicial]**. Ao longo dos anos,
            crescemos, superamos desafios e nos tornamos uma referência em **[ área ]**,
            sempre com o compromisso de **[um valor importante/qualidade]**.
        </p>
        </div>


        <div className="bg-pink-100 rounded-lg shadow-xl p-6 sm:p-8 border border-zinc-700 transition-transform transform hover:scale-105">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Nossa Equipe</h2>
        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-6">
            Acreditamos que nosso maior diferencial está nas pessoas. Nossa equipe é formada por profissionais
            talentosos e dedicados, com diversas habilidades e uma paixão em comum por **[o que sua equipe ama fazer]**.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <li className="bg-black p-4 rounded-md transition-colors duration-300 hover:bg-zinc-700">
            <span className="font-semibold text-white">Nome do Membro 1</span>
            <br />
            <span className="text-zinc-400">[Cargo]</span>
            </li>
            <li className="bg-black p-4 rounded-md transition-colors duration-300 hover:bg-zinc-700">
            <span className="font-semibold text-white">Nome do Membro 2</span>
            <br />
            <span className="text-zinc-400">[Cargo]</span>
            </li>
            <li className="bg-black p-4 rounded-md transition-colors duration-300 hover:bg-zinc-700">
            <span className="font-semibold text-white">Nome do Membro 3</span>
            <br />
            <span className="text-zinc-400">[Cargo]</span>
            </li>
        </ul>
        </div>
    </div>
    </div>
);
}

export default SobreNos;