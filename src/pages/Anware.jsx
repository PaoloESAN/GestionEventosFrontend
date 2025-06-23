import React from 'react'
import AnwareLogo from '../assets/anware.png'
import LetterGlitch from '../components/LetterGlitch'
import PruebaGlitch from '../components/LetrasJapo.jsx'
export default function Anware() {
    return (
        <>
            <div className='relative h-screen w-screen overflow-hidden'>
                <PruebaGlitch />
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="flex flex-col items-center content-start h-screen">
                    {/*Card para encerrar todo */}
                    <div className='flex flex-col items-center justify-center bg-base-200 p-4 mt-8 pb-6 rounded-4xl'>
                        <a href="/" className="btn btn-primary mt-4">Volver al Login</a>
                        <h1 className='mt-4 text-4xl font-black'> ACCESO DENEGADO</h1>
                        <div className="mt-8 mb-8">
                            <img src={AnwareLogo} alt="Anware Logo" className="w-200 h-122 rounded-3xl" />
                        </div>
                        <h2 className="font-bold text-4xl mb-8">Anware protege a esta pagina de ataques maliciosos.</h2>
                        <a href="https://www.instagram.com/anware.corp/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:underline">
                            Visita la pagina de Anware
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
