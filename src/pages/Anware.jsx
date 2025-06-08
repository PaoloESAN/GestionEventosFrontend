import React from 'react'
import AnwareLogo from '../assets/anware.png'

export default function Anware() {
    return (
        <div className="flex flex-col items-center content-start h-screen">
            <h1 className='mt-8 text-4xl font-black'> ACCESO DENEGADO</h1>
            <div className="mt-8 mb-8">
                <img src={AnwareLogo} alt="Anware Logo" className="w-200 h-122 rounded-3xl" />
            </div>
            <h2 className="font-bold text-4xl mb-8">Anware protege a esta pagina de ataques maliciosos.</h2>
            <a href="https://www.instagram.com/anware.corp/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:underline">
                Visita la pagina de Anware
            </a>
        </div>
    )
}
